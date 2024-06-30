import { type DebouncedFunc, debounce } from "lodash";
import { RequestBundler } from "../domain/RequestBundler";

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
		this.requests.push(request);
		this.softExecute();
		return new Promise((resolve, reject) => {
			this.responsePromises.push([resolve, reject]);
		});
	}

	private popRequests() {
		const requests = [...this.requests];
		this.requests = [];
		return requests;
	}

	private async execute(): Promise<void> {
		const requests = this.popRequests();
		const [sampleRequest] = requests;
		const payloads = await Promise.all(requests.map((r) => r.clone().text()));

		const { output, sourceMap } = new RequestBundler(payloads).execute();

		try {
			const response = await this.fetchFunc(
				new Request(sampleRequest.url, {
					method: sampleRequest.method,
					headers: sampleRequest.headers,
					body: output,
				}),
			);

			const responseBody = await response.json();
			this.responsePromises.forEach(([resolve], requestIndex) => {
				resolve(
					new Response(
						JSON.stringify({
							data: sourceMap.getSourceResponseBody(
								String(requestIndex),
								responseBody.data,
							),
						}),
					),
				);
			});
		} catch (error) {
			console.error(error);
		}
	}

	public forceExecute(): Promise<void> {
		this.softExecute.cancel();
		return this.execute();
	}
}
