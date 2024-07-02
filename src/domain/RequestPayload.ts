import {
	type DefinitionNode,
	type DocumentNode,
	type FieldNode,
	type FragmentDefinitionNode,
	Kind,
	type OperationDefinitionNode,
	type SelectionSetNode,
	type VariableDefinitionNode,
	type VariableNode,
	parse,
	print,
	visit,
} from "graphql";
import type { JsonObject } from "./JsonObject";
import type { SourceMap } from "./SourceMap";
import type { VariableValue } from "./VariableValue";

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

	private static getFragmentDefinitionByName(
		documentNode: DocumentNode,
		name: string,
	): FragmentDefinitionNode {
		const fragmentDefinitionNode = documentNode.definitions.find(
			(def: DefinitionNode) =>
				def.kind === Kind.FRAGMENT_DEFINITION && def.name.value === name,
		);

		if (!fragmentDefinitionNode) {
			throw new Error(`Fragment "${name}" not found.`);
		}

		return fragmentDefinitionNode as FragmentDefinitionNode;
	}

	private static withInlinedFragments(
		documentNode: DocumentNode,
	): DocumentNode {
		const documentNodeWithInlineFragments = visit(documentNode, {
			SelectionSet: (selectionSetNode) => {
				const selections = selectionSetNode.selections.flatMap((node) => {
					if (node.kind === Kind.FRAGMENT_SPREAD) {
						const fragmentDef = RequestPayload.getFragmentDefinitionByName(
							documentNode,
							node.name.value,
						);

						return [...fragmentDef.selectionSet.selections];
					}

					return [node];
				});

				const usedFieldNodes: Record<string, true> = {};
				const uniqueNodes = [];
				for (const node of selections) {
					if (node.kind === Kind.FIELD) {
						const name = node.alias?.value ?? node.name.value;
						if (!usedFieldNodes[name]) {
							usedFieldNodes[name] = true;
							uniqueNodes.push(node);
						}
					} else {
						uniqueNodes.push(node);
					}
				}

				return {
					...selectionSetNode,
					selections: uniqueNodes,
				} as SelectionSetNode;
			},
		});

		return {
			...documentNodeWithInlineFragments,
			definitions: documentNodeWithInlineFragments.definitions.filter(
				(def: DefinitionNode) => def.kind !== Kind.FRAGMENT_DEFINITION,
			),
		};
	}

	public static fromString(payloadString: string): RequestPayload {
		const { operationName, query, variables } = JSON.parse(payloadString);

		const documentNode = RequestPayload.withInlinedFragments(parse(query));

		return new RequestPayload(
			operationName ?? null,
			documentNode,
			variables ?? null,
			null,
		);
	}

	private getOperationDefinition(
		documentNode: DocumentNode = this.documentNode,
	): OperationDefinitionNode {
		const definition = documentNode.definitions.find(
			(def: DefinitionNode) => def.kind === Kind.OPERATION_DEFINITION,
		);

		if (!definition) {
			throw new Error("OperationDefinitionNode should be available");
		}

		return definition as OperationDefinitionNode;
	}

	getOperationName(documentNode?: DocumentNode): string | null {
		return this.getOperationDefinition(documentNode).name?.value ?? null;
	}

	private isQuery(): boolean {
		return this.getOperationDefinition().operation === "query";
	}

	private hasOnlyOneDefinition(): boolean {
		return this.documentNode.definitions.length === 1;
	}

	canGetNamespaced(): boolean {
		return this.isQuery() && this.hasOnlyOneDefinition();
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
		const operationName = this.getOperationName(documentNode);

		return visit(documentNode, {
			Variable: (node: VariableNode): VariableNode => {
				return {
					...node,
					name: {
						kind: Kind.NAME,
						value: sourceMap.getNamespacedVariableName(
							operationName,
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
		const operationName = this.getOperationName(documentNode);

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
									operationName,
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

		const operationName = this.getOperationName(namespacedDocument);

		const namespacedVariables =
			this.variables &&
			Object.fromEntries(
				Object.entries(this.variables).map(([key, value]) => [
					sourceMap.getNamespacedVariableName(operationName, requestId, key),
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
