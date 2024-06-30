import {
	type FieldNode,
	Kind,
	parse,
	print,
	visit,
	type DocumentNode,
	type OperationDefinitionNode,
	type VariableNode,
	type VariableDefinitionNode,
} from "graphql";
import type { VariableValue } from "./VariableValue";
import type { SourceMap } from "./SourceMap";
import type { JsonObject } from "./JsonObject";

type RequestPayloadPlainObject = {
	operationName?: string;
	query: string;
	variables?: JsonObject;
};

export class RequestPayload {
	private constructor(
		public readonly operationName: string | null,
		public readonly documentNode: DocumentNode,
		public readonly variables: Record<string, VariableValue> | null,
		public readonly sourceMap: SourceMap | null,
	) {}

	public static fromString(payloadString: string): RequestPayload {
		const { operationName, query, variables } = JSON.parse(payloadString);

		return new RequestPayload(
			operationName ?? null,
			parse(query),
			variables ?? null,
			null,
		);
	}

	private getOperationDefinition(
		documentNode: DocumentNode = this.documentNode,
	): OperationDefinitionNode {
		const definition = documentNode.definitions.find(
			(def) => def.kind === Kind.OPERATION_DEFINITION,
		);

		if (!definition) {
			throw new Error("OperationDefinitionNode should be available");
		}

		return definition as OperationDefinitionNode;
	}

	isQuery(): boolean {
		return this.getOperationDefinition().operation === "query";
	}

	getFields(documentNode: DocumentNode = this.documentNode): FieldNode[] {
		return this.getOperationDefinition(
			documentNode,
		).selectionSet.selections.filter(
			(s) => s.kind === Kind.FIELD,
		) as FieldNode[];
	}

	getVariableDefinitions(
		documentNode: DocumentNode = this.documentNode,
	): VariableDefinitionNode[] {
		return [
			...(this.getOperationDefinition(documentNode).variableDefinitions ?? []),
		];
	}

	private getWithNamespacedVariables(
		documentNode: DocumentNode,
		requestId: string,
		sourceMap: SourceMap,
	): DocumentNode {
		return visit(documentNode, {
			Variable(node: VariableNode): VariableNode {
				return {
					...node,
					name: {
						kind: Kind.NAME,
						value: sourceMap.getNamespacedVariableName(
							requestId,
							node.name.value,
						),
					},
				} satisfies VariableNode;
			},
		});
	}

	private getWithNamespacedFields(
		documentNode: DocumentNode,
		requestId: string,
		sourceMap: SourceMap,
	): DocumentNode {
		const operationDef = this.getOperationDefinition(documentNode);

		return {
			...documentNode,
			definitions: [
				{
					...operationDef,
					selectionSet: {
						...operationDef.selectionSet,
						selections: this.getFields(documentNode).map((node) => ({
							...node,
							alias: {
								kind: Kind.NAME,
								value: sourceMap.newNamespacedFieldName(
									requestId,
									node.alias?.value ?? node.name.value,
								),
							},
						})),
					},
				},
			],
		} satisfies DocumentNode;
	}

	public namespaced(requestId: string, sourceMap: SourceMap): RequestPayload {
		const namespacedDocument = [
			this.getWithNamespacedVariables.bind(this),
			this.getWithNamespacedFields.bind(this),
		].reduce(
			(documentNode, fn) => fn(documentNode, requestId, sourceMap),
			this.documentNode,
		);

		const namespacedVariables =
			this.variables &&
			Object.fromEntries(
				Object.entries(this.variables).map(([key, value]) => [
					sourceMap.getNamespacedVariableName(requestId, key),
					value,
				]),
			);

		return new RequestPayload(
			this.operationName,
			namespacedDocument,
			namespacedVariables,
			sourceMap,
		);
	}

	public toPlainObject(): RequestPayloadPlainObject {
		return Object.fromEntries(
			[
				["operationName", this.operationName],
				["query", print(this.documentNode)],
				["variables", this.variables],
			].filter(([_, v]) => Boolean(v)),
		);
	}

	public toString(): string {
		return JSON.stringify(this.toPlainObject());
	}
}
