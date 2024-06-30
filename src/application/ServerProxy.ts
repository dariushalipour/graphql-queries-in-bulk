import { type DebouncedFunc, debounce, omitBy, isUndefined } from "lodash";
import { RequestBundler } from "../domain/RequestBundler";
import type { JsonObject } from "../domain/JsonObject";
import { RequestPayload } from "../domain/RequestPayload";

type ServerProxyOptions = {
	bundlingIntervalMs: number;
	fetchFunc: typeof fetch;
};

export class ServerProxy {
	private readonly fetchFunc: typeof fetch;
	private requests: {
		request: Request;
		resolve: (response: Response) => void;
		reject: (error: Error) => void;
	}[] = [];
	private softExecute: DebouncedFunc<() => Promise<void>>;

	constructor(options: ServerProxyOptions) {
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
			this.requests.push({ request, resolve, reject });
		});

		this.softExecute();

		return promise;
	}

	private async canGetBundled(request: Request): Promise<boolean> {
		const body = await request.clone().text();
		const payload = RequestPayload.fromString(body);
		return payload.canGetNamespaced();
	}

	private popAllRequests() {
		const requests = [...this.requests];
		this.requests = [];
		return { requests };
	}

	private async execute(): Promise<void> {
		const { requests } = this.popAllRequests();

		if (requests.length === 0) {
			return;
		}

		const [sampleRequest] = requests;

		const payloads = await Promise.all(
			requests.map(({ request }) => request.clone().text()),
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
			requests.forEach(({ resolve }, requestIndex) => {
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
			for (const { request, resolve, reject } of requests) {
				this.fetchFunc(request).then(resolve, reject);
			}
		}
	}

	public forceExecute(): Promise<void> {
		this.softExecute.cancel();
		return this.execute();
	}
}
