import {
	type DocumentNode,
	type FragmentDefinitionNode,
	type FragmentSpreadNode,
	Kind,
	type OperationDefinitionNode,
	type SelectionNode,
	type VariableNode,
} from "graphql";
import { DocumentHelper } from "../infra/DocumentHelper";
import { RequestPayload } from "./RequestPayload";
import type { RequestSourceMapWriter } from "./SourceMap/RequestSourceMapWriter";

export class NamespacedRequestPayload {
	private static hasOnlyQueryAndFragments(document: DocumentNode): boolean {
		for (const definition of document.definitions) {
			if (
				DocumentHelper.isQuery(definition) ||
				DocumentHelper.isFragment(definition)
			) {
				continue;
			}

			return false;
		}

		return true;
	}

	private static hasExactlyOneQueryOperation(document: DocumentNode): boolean {
		const queryOperations = document.definitions.filter((def) =>
			DocumentHelper.isQuery(def),
		);
		return queryOperations.length === 1;
	}

	private static hasOnlyFieldsOnItsQueryRoot(document: DocumentNode): boolean {
		return DocumentHelper.getOperationDefinition(
			document,
		).selectionSet.selections.every(
			(selection) => selection.kind === Kind.FIELD,
		);
	}

	public static canGetNamespaced(requestPayload: RequestPayload): boolean {
		return (
			NamespacedRequestPayload.hasOnlyQueryAndFragments(
				requestPayload.document,
			) &&
			NamespacedRequestPayload.hasExactlyOneQueryOperation(
				requestPayload.document,
			) &&
			NamespacedRequestPayload.hasOnlyFieldsOnItsQueryRoot(
				requestPayload.document,
			)
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
		const document = [
			NamespacedRequestPayload.getWithNamespacedVariables,
			NamespacedRequestPayload.getWithNamespacedFragments,
			NamespacedRequestPayload.getWithNamespacedSelections,
		].reduce(
			(documentNode, fn) => fn(documentNode, sourceMap),
			requestPayload.document,
		);

		const operationName = DocumentHelper.getOperationName(document);

		const variables = requestPayload.variables.namespaced(
			operationName,
			sourceMap,
		);

		return new NamespacedRequestPayload(
			new RequestPayload(operationName, document, variables),
		);
	}

	public mergedWith(
		namespacedRequestPayload: NamespacedRequestPayload,
	): NamespacedRequestPayload {
		return new NamespacedRequestPayload(
			new RequestPayload(
				this.requestPayload.operationName,
				DocumentHelper.mergeDocuments([
					this.requestPayload.document,
					namespacedRequestPayload.requestPayload.document,
				]),
				this.requestPayload.variables.mergedWith(
					namespacedRequestPayload.requestPayload.variables,
				),
			),
		);
	}

	private static getWithNamespacedSelections(
		documentNode: DocumentNode,
		sourceMap: RequestSourceMapWriter,
	): DocumentNode {
		const operationDef = DocumentHelper.getOperationDefinition(documentNode);
		const operationName = DocumentHelper.getOperationName(documentNode);

		return DocumentHelper.visit(documentNode, {
			OperationDefinition: (
				definition: OperationDefinitionNode,
			): OperationDefinitionNode => {
				return {
					...operationDef,
					selectionSet: {
						...operationDef.selectionSet,
						selections: definition.selectionSet.selections.map((node) =>
							NamespacedRequestPayload.getNamespacedSelectionNode(
								node,
								sourceMap,
								operationName,
							),
						),
					},
				};
			},
		});
	}

	private static getNamespacedSelectionNode(
		selection: SelectionNode,
		sourceMap: RequestSourceMapWriter,
		operationName: string | null,
	): SelectionNode {
		if (selection.kind === Kind.FIELD) {
			const aliasValue = sourceMap.newNamespacedFieldName(
				operationName,
				selection.alias?.value ?? selection.name.value,
			);

			return {
				...selection,
				alias: { kind: Kind.NAME, value: aliasValue },
			};
		}

		if (selection.kind === Kind.FRAGMENT_SPREAD) {
			return NamespacedRequestPayload.getNamespacedFragmentSpread(
				sourceMap,
				operationName,
				selection,
			);
		}

		return { ...selection };
	}

	private static getWithNamespacedFragments(
		documentNode: DocumentNode,
		sourceMap: RequestSourceMapWriter,
	): DocumentNode {
		const operationName = DocumentHelper.getOperationName(documentNode);

		return DocumentHelper.visit(documentNode, {
			FragmentDefinition: (
				node: FragmentDefinitionNode,
			): FragmentDefinitionNode => {
				return NamespacedRequestPayload.getNamespacedFragmentDefinition(
					node,
					sourceMap,
					operationName,
				);
			},
			FragmentSpread: (node: FragmentSpreadNode): FragmentSpreadNode => {
				return NamespacedRequestPayload.getNamespacedFragmentSpread(
					sourceMap,
					operationName,
					node,
				);
			},
		});
	}

	private static getNamespacedFragmentDefinition(
		node: FragmentDefinitionNode,
		sourceMap: RequestSourceMapWriter,
		operationName: string | null,
	): FragmentDefinitionNode {
		return {
			...node,
			name: {
				kind: Kind.NAME,
				value: sourceMap.getNamespacedFragmentName(
					operationName,
					node.name.value,
				),
			},
		} satisfies FragmentDefinitionNode;
	}

	private static getNamespacedFragmentSpread(
		sourceMap: RequestSourceMapWriter,
		operationName: string | null,
		fragmentSpread: FragmentSpreadNode,
	): FragmentSpreadNode {
		const aliasValue = sourceMap.getNamespacedFragmentName(
			operationName,
			fragmentSpread.name.value,
		);

		return {
			...fragmentSpread,
			name: { kind: Kind.NAME, value: aliasValue },
		};
	}

	private static getWithNamespacedVariables(
		documentNode: DocumentNode,
		sourceMap: RequestSourceMapWriter,
	): DocumentNode {
		const operationName = DocumentHelper.getOperationName(documentNode);

		return DocumentHelper.visit(documentNode, {
			Variable: (node: VariableNode): VariableNode => {
				return NamespacedRequestPayload.getNamespacedVariable(
					node,
					sourceMap,
					operationName,
				);
			},
		});
	}

	private static getNamespacedVariable(
		node: VariableNode,
		sourceMap: RequestSourceMapWriter,
		operationName: string | null,
	): VariableNode {
		return {
			...node,
			name: {
				kind: Kind.NAME,
				value: sourceMap.getNamespacedVariableName(
					operationName,
					node.name.value,
				),
			},
		} satisfies VariableNode;
	}
}
