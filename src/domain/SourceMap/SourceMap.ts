import type { JsonObject } from "../JsonObject";
import type { NamespacingStrategy } from "../NamespacingStrategy";
import type { ReadOnlySourceMap } from "./ReadOnlySourceMap";
import { RequestSourceMap } from "./RequestSourceMap";
import type { RequestSourceMapWriter } from "./RequestSourceMapWriter";

export class SourceMap implements ReadOnlySourceMap {
	private requestSourceMaps: { [requestId: string]: RequestSourceMap } = {};

	getRequestSourceMapWriterFor(
		requestId: string,
		namespacingStrategy: NamespacingStrategy,
	): RequestSourceMapWriter {
		const requestSourceMap = new RequestSourceMap(
			requestId,
			namespacingStrategy,
		);

		this.requestSourceMaps = {
			...this.requestSourceMaps,
			[requestId]: requestSourceMap,
		};

		return requestSourceMap;
	}

	getSourceFieldName(
		requestId: string,
		namespacedFieldName: string,
	): string | null {
		return (
			this.requestSourceMaps[requestId].fields.find(
				({ namespaced }) => namespaced === namespacedFieldName,
			)?.source ?? null
		);
	}

	getSourceResponseErrors(
		requestId: string,
		errors: (object & { path: string[] })[] | undefined,
	): object[] | undefined {
		const scopedErrors = (errors ?? []).flatMap((error) => {
			const sourceFieldName = this.getSourceFieldName(requestId, error.path[0]);

			return sourceFieldName
				? [
						{
							...error,
							path: [sourceFieldName, ...error.path.slice(1)],
						},
					]
				: [];
		});

		return scopedErrors.length > 0 ? scopedErrors : undefined;
	}

	getSourceResponseData(
		requestId: string,
		namespacedResponseBody: JsonObject,
	): JsonObject {
		const requestFields = this.requestSourceMaps[requestId]?.fields;

		if (!requestFields) {
			throw new Error(`requestId "${requestId}" is not found.`);
		}

		return Object.fromEntries(
			requestFields.map(({ source, namespaced }) => [
				source,
				namespacedResponseBody[namespaced],
			]),
		);
	}
}
