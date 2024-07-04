import {
	type DefinitionNode,
	type DocumentNode,
	type FragmentDefinitionNode,
	Kind,
	type OperationDefinitionNode,
	type SelectionNode,
	type SelectionSetNode,
	type VariableDefinitionNode,
	parse,
	print,
	visit,
} from "graphql";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class DocumentHelper {
	public static readonly visit = visit;

	public static stringToDocument(string: string): DocumentNode {
		return parse(string);
	}

	public static documentToString(document: DocumentNode): string {
		return print(document);
	}

	public static empty(operationName: string): DocumentNode {
		return visit(parse(`query ${operationName} {x}`), {
			SelectionSet: (selectionSet: SelectionSetNode): SelectionSetNode => ({
				...selectionSet,
				selections: [],
			}),
		});
	}

	public static mergeDocuments(documents: DocumentNode[]): DocumentNode {
		return {
			...documents[0],
			definitions: [
				...documents.flatMap((document) =>
					DocumentHelper.getFragmentDefinitions(document),
				),
				DocumentHelper.mergeOperations(
					documents.map((document) =>
						DocumentHelper.getOperationDefinition(document),
					),
				),
			],
		};
	}

	static getFragmentDefinitions(
		document: DocumentNode,
	): FragmentDefinitionNode[] {
		return document.definitions.filter(
			(def: DefinitionNode) => def.kind === Kind.FRAGMENT_DEFINITION,
		);
	}

	private static mergeOperations(
		operations: OperationDefinitionNode[],
	): OperationDefinitionNode {
		return {
			...operations[0],
			variableDefinitions: operations.flatMap((operation) =>
				DocumentHelper.getVariableDefinitions(operation),
			),
			selectionSet: {
				...operations[0].selectionSet,
				selections: operations.flatMap((operation) =>
					DocumentHelper.getSelections(operation),
				),
			},
		};
	}

	public static getOperationDefinition(
		documentNode: DocumentNode,
	): OperationDefinitionNode {
		const definition = documentNode.definitions.find(
			(def: DefinitionNode) => def.kind === Kind.OPERATION_DEFINITION,
		);

		if (!definition) {
			throw new Error("OperationDefinitionNode should be available");
		}

		return definition;
	}

	public static getOperationName(documentNode: DocumentNode): string | null {
		return (
			DocumentHelper.getOperationDefinition(documentNode).name?.value ?? null
		);
	}

	private static getSelections(
		operation: OperationDefinitionNode,
	): SelectionNode[] {
		return operation.selectionSet.selections.slice(0);
	}

	private static getVariableDefinitions(
		operation: OperationDefinitionNode,
	): VariableDefinitionNode[] {
		return [...(operation.variableDefinitions ?? [])];
	}

	public static isQuery(definition: DefinitionNode): boolean {
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "query"
		);
	}

	public static isFragment(definition: DefinitionNode): boolean {
		return definition.kind === "FragmentDefinition";
	}
}