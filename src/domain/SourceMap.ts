import type { JsonObject } from "./JsonObject";
import type { NamespacingStrategy } from "./NamespacingStrategy";

export class SourceMap {
	private variables: {
		[requestId: string]: { source: string; namespaced: string }[];
	} = {};

	private fields: {
		[requestId: string]: { source: string; namespaced: string }[];
	} = {};

	constructor(private readonly namespacingStrategy: NamespacingStrategy) {}

	private makeFieldName(
		operationName: string | null,
		requestId: string,
		fieldId: string,
	): string {
		const ending = ["r", requestId, "f", fieldId].join("");
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
		requestId: string,
		sourceFieldName: string,
	): string {
		const requestFields = this.fields[requestId] ?? [];
		const fieldId = String(requestFields.length);

		const namespaced = this.makeFieldName(operationName, requestId, fieldId);

		this.fields = {
			...this.fields,
			[requestId]: [...requestFields, { source: sourceFieldName, namespaced }],
		};

		return namespaced;
	}

	private makeVariableName(
		operationName: string | null,
		requestId: string,
		variableId: string,
	): string {
		const ending = ["r", requestId, "v", variableId].join("");
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
		requestId: string,
		sourceVariableName: string,
	): string {
		const requestVariables = this.variables[requestId] ?? [];

		const alreadyExisting = requestVariables.find(
			(v) => v.source === sourceVariableName,
		);

		if (alreadyExisting) {
			return alreadyExisting.namespaced;
		}

		const variableId = String(requestVariables.length);

		const namespaced = this.makeVariableName(
			operationName,
			requestId,
			variableId,
		);

		this.variables = {
			...this.variables,
			[requestId]: [
				...requestVariables,
				{ source: sourceVariableName, namespaced },
			],
		};

		return namespaced;
	}

	getSourceFieldName(
		requestId: string,
		namespacedFieldName: string,
	): string | null {
		return (
			this.fields[requestId].find(
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
		const requestFields = this.fields[requestId];

		if (!requestFields) {
			throw new Error(
				`requestId "${requestId}" is not found. fields source map: ${JSON.stringify(this.fields)}`,
			);
		}

		return Object.fromEntries(
			requestFields.map(({ source, namespaced }) => [
				source,
				namespacedResponseBody[namespaced],
			]),
		);
	}
}
