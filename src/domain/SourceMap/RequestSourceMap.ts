import type { NamespacingStrategy } from "../NamespacingStrategy";
import type { RequestSourceMapWriter } from "./RequestSourceMapWriter";

export class RequestSourceMap implements RequestSourceMapWriter {
	public variables: { source: string; namespaced: string }[] = [];
	public fragments: { source: string; namespaced: string }[] = [];
	public fields: { source: string; namespaced: string }[] = [];

	public constructor(
		private readonly requestId: string,
		private readonly namespacingStrategy: NamespacingStrategy,
	) {}

	private static join(list: (string | null)[]): string {
		return list.filter(Boolean).join("_");
	}

	private makeFieldName(
		operationName: string | null,
		sourceAliasName: string | null,
		fieldId: string,
	): string {
		const uniqueKey = ["r", this.requestId, "f", fieldId].join("");

		if (this.namespacingStrategy === "short") {
			return RequestSourceMap.join([uniqueKey]);
		}

		if (this.namespacingStrategy === "sufficient") {
			return RequestSourceMap.join([sourceAliasName, uniqueKey]);
		}

		if (this.namespacingStrategy === "verbose") {
			return RequestSourceMap.join([operationName, sourceAliasName, uniqueKey]);
		}

		this.namespacingStrategy satisfies never;

		throw new TypeError(
			`unknown namespacingStrategy: "${this.namespacingStrategy}"`,
		);
	}

	newNamespacedFieldName(
		operationName: string | null,
		sourceAliasName: string | null,
		sourceFieldName: string,
	): string {
		const fieldId = String(this.fields.length);

		const namespaced = this.makeFieldName(
			operationName,
			sourceAliasName,
			fieldId,
		);

		this.fields = [
			...this.fields,
			{ source: sourceAliasName ?? sourceFieldName, namespaced },
		];

		return namespaced;
	}

	private makeVariableName(
		operationName: string | null,
		sourceVariableName: string,
		variableId: string,
	): string {
		const uniqueKey = ["r", this.requestId, "v", variableId].join("");

		if (this.namespacingStrategy === "short") {
			return RequestSourceMap.join([uniqueKey]);
		}

		if (this.namespacingStrategy === "sufficient") {
			return RequestSourceMap.join([sourceVariableName, uniqueKey]);
		}

		if (this.namespacingStrategy === "verbose") {
			return RequestSourceMap.join([
				operationName,
				sourceVariableName,
				uniqueKey,
			]);
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

		const namespaced = this.makeVariableName(
			operationName,
			sourceVariableName,
			variableId,
		);

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
		const uniqueKey = ["r", this.requestId, "fr", fragmentId].join("");

		if (this.namespacingStrategy === "short") {
			return RequestSourceMap.join([uniqueKey]);
		}

		if (this.namespacingStrategy === "sufficient") {
			return RequestSourceMap.join([sourceFragmentName, uniqueKey]);
		}

		if (this.namespacingStrategy === "verbose") {
			return RequestSourceMap.join([
				operationName,
				sourceFragmentName,
				uniqueKey,
			]);
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
