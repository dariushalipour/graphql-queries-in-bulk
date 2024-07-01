import { type DebouncedFunc, debounce, isUndefined, omitBy } from "lodash";
import type { JsonObject } from "../domain/JsonObject";
import { RequestBundler } from "../domain/RequestBundler";
import { RequestPayload } from "../domain/RequestPayload";

type ProxyOptions = {
	bundlingIntervalMs: number;
	fetchFunc: typeof fetch;
};

type ProxyTask = {
	request: Request;
	resolve: (response: Response) => void;
	reject: (error: Error) => void;
};

export class ServerProxy {
	private readonly fetchFunc: typeof fetch;
	private tasks: ProxyTask[] = [];
	private softExecute: DebouncedFunc<() => Promise<void>>;

	constructor(options: ProxyOptions) {
		this.fetchFunc = options.fetchFunc;
		this.softExecute = debounce(
			this.execute.bind(this),
			options.bundlingIntervalMs,
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

		this.softExecute();

		return promise;
	}

	private async canGetBundled(request: Request): Promise<boolean> {
		const body = await request.clone().text();
		const payload = RequestPayload.fromString(body);
		return payload.canGetNamespaced();
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

		const { output, sourceMap } = new RequestBundler(payloads).execute();

		const response = await this.fetchFunc(
			new Request(sampleRequest.request.url, {
				method: sampleRequest.request.method,
				headers: sampleRequest.request.headers,
				body: output,
			}),
		);

		const responseBody: {
			errors?: (object & { path: string[] })[];
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
			for (const { request, resolve, reject } of tasks) {
				this.fetchFunc(request).then(resolve, reject);
			}
		}
	}

	public forceExecute(): Promise<void> {
		this.softExecute.cancel();
		return this.execute();
	}
}
