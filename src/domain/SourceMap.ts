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
		return Object.fromEntries(
			this.fields[requestId].map(({ source, namespaced }) => [
				source,
				namespacedResponseBody[namespaced],
			]),
		);
	}
}
