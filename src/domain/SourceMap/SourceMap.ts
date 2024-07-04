import type { JsonObject } from "../JsonObject";
import type { NamespacingStrategy } from "../NamespacingStrategy";
import type { ReadOnlySourceMap } from "./ReadOnlySourceMap";
import type { RequestSourceMapWriter } from "./RequestSourceMapWriter";

class RequestSourceMap implements RequestSourceMapWriter {
	public variables: { source: string; namespaced: string }[] = [];
	public fragments: { source: string; namespaced: string }[] = [];
	public fields: { source: string; namespaced: string }[] = [];

	public constructor(
		private readonly requestId: string,
		private readonly namespacingStrategy: NamespacingStrategy,
	) {}

	private makeFieldName(operationName: string | null, fieldId: string): string {
		const ending = ["r", this.requestId, "f", fieldId].join("");
		if (this.namespacingStrategy === "short") {
			return ending;
		}

		if (this.namespacingStrategy === "with-operation-name") {
			return [operationName, ending].filter(Boolean).join("_");
		}

		this.namespacingStrategy satisfies never;

		throw new TypeError(
			`unknown namespacingStrategy: "${this.namespacingStrategy}"`,
		);
	}

	newNamespacedFieldName(
		operationName: string | null,
		sourceFieldName: string,
	): string {
		const fieldId = String(this.fields.length);

		const namespaced = this.makeFieldName(operationName, fieldId);

		this.fields = [...this.fields, { source: sourceFieldName, namespaced }];

		return namespaced;
	}

	private makeVariableName(
		operationName: string | null,
		variableId: string,
	): string {
		const ending = ["r", this.requestId, "v", variableId].join("");
		if (this.namespacingStrategy === "short") {
			return ending;
		}

		if (this.namespacingStrategy === "with-operation-name") {
			return [operationName, ending].filter(Boolean).join("_");
		}

		this.namespacingStrategy satisfies never;

		throw new TypeError(
			`unknown namespacingStrategy: "${this.namespacingStrategy}"`,
		);
	}

	getNamespacedVariableName(
		operationName: string | null,
		sourceVariableName: string,
	): string {
		const alreadyExisting = this.variables.find(
			(v) => v.source === sourceVariableName,
		);

		if (alreadyExisting) {
			return alreadyExisting.namespaced;
		}

		const variableId = String(this.variables.length);

		const namespaced = this.makeVariableName(operationName, variableId);

		this.variables = [
			...this.variables,
			{ source: sourceVariableName, namespaced },
		];

		return namespaced;
	}

	private makeFragmentName(
		operationName: string | null,
		sourceFragmentName: string,
		fragmentId: string,
	): string {
		const ending = ["r", this.requestId, "fr", fragmentId].join("");
		if (this.namespacingStrategy === "short") {
			return ending;
		}

		if (this.namespacingStrategy === "with-operation-name") {
			return [operationName, sourceFragmentName, ending]
				.filter(Boolean)
				.join("_");
		}

		this.namespacingStrategy satisfies never;

		throw new TypeError(
			`unknown namespacingStrategy: "${this.namespacingStrategy}"`,
		);
	}

	getNamespacedFragmentName(
		operationName: string | null,
		sourceFragmentName: string,
	): string {
		const requestFragments = this.fragments ?? [];

		const alreadyExisting = requestFragments.find(
			(v) => v.source === sourceFragmentName,
		);

		if (alreadyExisting) {
			return alreadyExisting.namespaced;
		}

		const fragmentId = String(requestFragments.length);

		const namespaced = this.makeFragmentName(
			operationName,
			sourceFragmentName,
			fragmentId,
		);

		this.fragments = [
			...requestFragments,
			{ source: sourceFragmentName, namespaced },
		];

		return namespaced;
	}
}

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
