import { NamespacedRequestPayload } from "./NamespacedRequestPayload";
import type { NamespacingStrategy } from "./NamespacingStrategy";
import { RequestPayload } from "./RequestPayload";
import type { ReadOnlySourceMap } from "./SourceMap/ReadOnlySourceMap";
import { SourceMap } from "./SourceMap/SourceMap";

export class BundledRequest {
	private readonly requestPayloads: NamespacedRequestPayload[];
	private readonly sourceMap: SourceMap;
	private readonly outputString: string;

	constructor(
		private readonly namespacingStrategy: NamespacingStrategy,
		payloads: string[],
	) {
		this.sourceMap = new SourceMap();

		this.requestPayloads = payloads.map((x, requestIndex) =>
			NamespacedRequestPayload.fromRequestPayload(
				RequestPayload.fromString(x),
				this.sourceMap.getRequestSourceMapWriterFor(
					String(requestIndex),
					this.namespacingStrategy,
				),
			),
		);

		const bundledPayload = this.requestPayloads.reduce(
			(acc, payload) => acc.mergedWith(payload),
			NamespacedRequestPayload.empty(this.getOperationName()),
		);

		this.outputString = JSON.stringify(
			bundledPayload.requestPayload.toPlainObject(),
		);
	}

	public getSourceMap(): ReadOnlySourceMap {
		return this.sourceMap;
	}

	public getOutput(): string {
		return this.outputString;
	}

	private getOperationName(): string {
		const constantName = "BundledQuery";

		if (this.namespacingStrategy === "short") {
			return constantName;
		}

		if (this.namespacingStrategy === "with-operation-name") {
			return [
				constantName,
				...this.requestPayloads
					.map((p) => p.requestPayload.operationName)
					.filter(Boolean),
			].join("_");
		}

		this.namespacingStrategy satisfies never;

		throw new TypeError(
			`unknown namespacingStrategy: "${this.namespacingStrategy}"`,
		);
	}
}
