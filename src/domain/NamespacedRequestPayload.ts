import { RequestPayload } from "./RequestPayload";
import type { RequestPayloadPlainObject } from "./RequestPayloadPlainObject";
import type { RequestSourceMapWriter } from "./SourceMap/RequestSourceMapWriter";

export class NamespacedRequestPayload {
	public static canGetNamespaced(requestPayload: RequestPayload): boolean {
		return (
			requestPayload.document.hasOnlyQueryAndFragments() &&
			requestPayload.document.hasExactlyOneQueryOperation() &&
			requestPayload.document.hasOnlyFieldsOnItsQueryRoot()
		);
	}

	private constructor(public readonly requestPayload: RequestPayload) {}

	public static empty(operationName: string): NamespacedRequestPayload {
		return new NamespacedRequestPayload(RequestPayload.empty(operationName));
	}

	public static fromRequestPayload(
		requestPayload: RequestPayload,
		sourceMap: RequestSourceMapWriter,
	): NamespacedRequestPayload {
		const document = requestPayload.document.namespaced(sourceMap);

		const variables = requestPayload.variables.namespaced(
			document.getOperationName(),
			sourceMap,
		);

		return new NamespacedRequestPayload(
			new RequestPayload(document.getOperationName(), document, variables),
		);
	}

	public mergedWith(
		namespacedRequestPayload: NamespacedRequestPayload,
	): NamespacedRequestPayload {
		return new NamespacedRequestPayload(
			new RequestPayload(
				this.requestPayload.operationName,
				this.requestPayload.document.mergedWith(
					namespacedRequestPayload.requestPayload.document,
				),
				this.requestPayload.variables.mergedWith(
					namespacedRequestPayload.requestPayload.variables,
				),
			),
		);
	}

	public toPlainObject(): RequestPayloadPlainObject {
		return this.requestPayload.toPlainObject();
	}
}
