import { type DebouncedFunc, debounce, isUndefined, omitBy } from "lodash";
import { BundledRequest } from "../domain/BundledRequest";
import type { JsonObject } from "../domain/JsonObject";
import { NamespacedRequestPayload } from "../domain/NamespacedRequestPayload";
import type { NamespacingStrategy } from "../domain/NamespacingStrategy";
import { RequestPayload } from "../domain/RequestPayload";
import type { RerunWithoutBundlingEvent } from "../domain/RerunWithoutBundlingEvent";
import type { GraphQLFormattedError } from "graphql";

type ProxyOptions = {
	bundlingIntervalMs?: number;
	bundleRequestCountMax?: number;
	namespacingStrategy?: NamespacingStrategy;
	onRerunWithoutBundling?: (event: RerunWithoutBundlingEvent) => void;
	fetchFunc?: typeof fetch;
};

type ProxyTask = {
	request: Request;
	resolve: (response: Response) => void;
	reject: (error: Error) => void;
};

const DEFAULT_BUNDLING_INTERVAL_MS = 100;
const DEFAULT_BUNDLE_REQUEST_COUNT_MAX = 10;
const DEFAULT_NAMESPACING_STRATEGY = "sufficient" satisfies NamespacingStrategy;
const DEFAULT_ON_RERUN_WITHOUT_BUNDLING = (() => {}) satisfies (
	event: RerunWithoutBundlingEvent,
) => void;

export class ServerProxy {
	private readonly fetchFunc: typeof fetch;
	private readonly namespacingStrategy: NamespacingStrategy;
	private readonly onRerunWithoutBundling: (
		event: RerunWithoutBundlingEvent,
	) => void;
	private readonly bundleRequestCountMax: number;
	private tasks: ProxyTask[] = [];
	private debouncedExecute: DebouncedFunc<() => Promise<void>>;

	constructor(options?: ProxyOptions) {
		this.namespacingStrategy =
			options?.namespacingStrategy ?? DEFAULT_NAMESPACING_STRATEGY;

		const onRerunWithoutBundling =
			options?.onRerunWithoutBundling ?? DEFAULT_ON_RERUN_WITHOUT_BUNDLING;
		this.onRerunWithoutBundling = (...args) => onRerunWithoutBundling(...args);

		this.bundleRequestCountMax =
			options?.bundleRequestCountMax ?? DEFAULT_BUNDLE_REQUEST_COUNT_MAX;

		const fetchFunc = options?.fetchFunc ?? fetch;
		this.fetchFunc = (...args) => fetchFunc(...args);

		this.debouncedExecute = debounce(
			this.execute.bind(this),
			options?.bundlingIntervalMs ?? DEFAULT_BUNDLING_INTERVAL_MS,
		);
	}

	public async submitRequest(request: Request): Promise<Response> {
		const canGetBundled = await this.canGetBundled(request);

		if (!canGetBundled) {
			return this.fetchFunc(request);
		}

		const promise = new Promise<Response>((resolve, reject) => {
			this.tasks.push({ request, resolve, reject });
		});

		if (this.tasks.length < this.bundleRequestCountMax) {
			this.debouncedExecute();
		} else {
			this.execute();
		}

		return promise;
	}

	private async canGetBundled(request: Request): Promise<boolean> {
		const body = await request.clone().text();
		const payload = RequestPayload.fromString(body);
		return NamespacedRequestPayload.canGetNamespaced(payload);
	}

	private popAllTasks() {
		const tasks = [...this.tasks];
		this.tasks = [];
		return { tasks };
	}

	private async execute(): Promise<void> {
		const { tasks } = this.popAllTasks();

		if (tasks.length === 0) {
			return;
		}

		const [sampleRequest] = tasks;

		const payloads = await Promise.all(
			tasks.map(({ request }) => request.clone().text()),
		);

		const bundledRequest = new BundledRequest(
			this.namespacingStrategy,
			payloads,
		);

		const sourceMap = bundledRequest.getSourceMap();

		const bundledBody = bundledRequest.getOutput();

		const response = await this.fetchFunc(
			new Request(sampleRequest.request.url, {
				method: sampleRequest.request.method,
				headers: sampleRequest.request.headers,
				body: bundledBody,
			}),
		);

		const responseBody: {
			errors?: GraphQLFormattedError[];
			data?: JsonObject;
		} = await response.json();

		if (responseBody.data) {
			tasks.forEach(({ resolve }, requestIndex) => {
				const data = sourceMap.getSourceResponseData(
					String(requestIndex),
					responseBody.data ?? {},
				);

				const errors = sourceMap.getSourceResponseErrors(
					String(requestIndex),
					responseBody.errors,
				);

				const scopedResponseBody = JSON.stringify(
					omitBy({ errors, data }, isUndefined),
				);

				resolve(new Response(scopedResponseBody));
			});
		} else {
			this.onRerunWithoutBundling({
				reason: "GRAPHQL_SERVER_ERROR",
				originalRequests: payloads.map((payload) =>
					RequestPayload.fromString(payload).toPlainObject(),
				),
				bundledRequest: RequestPayload.fromString(bundledBody).toPlainObject(),
				errors: responseBody.errors,
			});
			for (const { request, resolve, reject } of tasks) {
				this.fetchFunc(request).then(resolve, reject);
			}
		}
	}

	public forceExecute(): Promise<void> {
		this.debouncedExecute.cancel();
		return this.execute();
	}
}
