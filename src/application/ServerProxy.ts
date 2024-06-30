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
	private requests: Request[] = [];
	private responsePromises: [
		(response: Response) => void,
		(error: Error) => void,
	][] = [];
	private softExecute: DebouncedFunc<() => Promise<void>>;

	constructor(options: ServerProxyOptions) {
		this.fetchFunc = options.fetchFunc;
		this.softExecute = debounce(
			this.execute.bind(this),
			options.bundlingIntervalMs,
		);
	}

	public async submitRequest(request: Request): Promise<Response> {
		const isQuery = await this.isQueryRequest(request);

		if (!isQuery) {
			return this.fetchFunc(request);
		}

		this.requests.push(request);
		this.softExecute();
		return new Promise((resolve, reject) => {
			this.responsePromises.push([resolve, reject]);
		});
	}

	private async isQueryRequest(request: Request): Promise<boolean> {
		const body = await request.clone().text();
		const payload = RequestPayload.fromString(body);
		return payload.isQuery();
	}

	private popAllRequests() {
		const requests = [...this.requests];
		this.requests = [];
		return requests;
	}

	private async execute(): Promise<void> {
		const requests = this.popAllRequests();

		if (requests.length === 0) {
			return;
		}

		const [sampleRequest] = requests;
		const payloads = await Promise.all(requests.map((r) => r.clone().text()));

		const { output, sourceMap } = new RequestBundler(payloads).execute();

		const response = await this.fetchFunc(
			new Request(sampleRequest.url, {
				method: sampleRequest.method,
				headers: sampleRequest.headers,
				body: output,
			}),
		);

		const responseBody: {
			errors?: (object & { path: string[] })[];
			data?: JsonObject;
		} = await response.json();

		if (responseBody.data) {
			this.responsePromises.forEach(([resolve], requestIndex) => {
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
			this.responsePromises.forEach(([resolve, reject], requestIndex) => {
				this.fetchFunc(requests[requestIndex]).then(resolve, reject);
			});
		}
	}

	public forceExecute(): Promise<void> {
		this.softExecute.cancel();
		return this.execute();
	}
}
