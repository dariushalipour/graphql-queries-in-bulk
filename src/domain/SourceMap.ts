import type { JsonObject } from "./JsonObject";

export class SourceMap {
	private variables: {
		[requestId: string]: { source: string; namespaced: string }[];
	} = {};

	private fields: {
		[requestId: string]: { source: string; namespaced: string }[];
	} = {};

	newNamespacedFieldName(requestId: string, sourceFieldName: string): string {
		const requestFields = this.fields[requestId] ?? [];
		const fieldId = requestFields.length;

		const namespaced = ["r", requestId, "f", fieldId].join("");

		this.fields = {
			...this.fields,
			[requestId]: [...requestFields, { source: sourceFieldName, namespaced }],
		};

		return namespaced;
	}

	getNamespacedVariableName(
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

		const variableId = requestVariables.length;

		const namespaced = ["r", requestId, "v", variableId].join("");

		this.variables = {
			...this.variables,
			[requestId]: [
				...requestVariables,
				{ source: sourceVariableName, namespaced },
			],
		};

		return namespaced;
	}

	getSourceResponseBody(
		requestId: string,
		namespacedResponseBody: JsonObject,
	): JsonObject {
		return Object.fromEntries(
			this.fields[requestId].map(({ source, namespaced }) => [
				source,
				namespacedResponseBody[namespaced],
			]),
		);
	}
}
