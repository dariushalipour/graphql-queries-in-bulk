import {
	type DefinitionNode,
	type FragmentSpreadNode,
	Kind,
	type OperationDefinitionNode,
	type SelectionNode,
	type VariableNode,
	visit,
} from "graphql";
import { merge } from "lodash";
import type { RequestSourceMapWriter } from "./SourceMap/RequestSourceMapWriter";

export class Operation {
	private constructor(private readonly node: OperationDefinitionNode) {}

	public static fromOperationNode(node: OperationDefinitionNode): Operation {
		return new Operation(node);
	}

	public toOperationNode(): DefinitionNode {
		return { ...this.node };
	}

	public getName(): string | null {
		return this.node.name?.value ?? null;
	}

	public hasOnlyFieldsOnItsQueryRoot(): boolean {
		return this.node.selectionSet.selections.every(
			(selection) => selection.kind === Kind.FIELD,
		);
	}

	public namespaced(sourceMap: RequestSourceMapWriter): Operation {
		return this.withNamespacedVariables(sourceMap).withNamespacedSelections(
			sourceMap,
		);
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

	public withNamespacedVariables(sourceMap: RequestSourceMapWriter): Operation {
		const operationName = this.getName();

		const node = visit(this.node, {
			Variable: (node: VariableNode): VariableNode => {
				return Operation.getNamespacedVariable(node, sourceMap, operationName);
			},
		});

		return new Operation(node);
	}

	public withNamespacedSelections(
		sourceMap: RequestSourceMapWriter,
	): Operation {
		const operationName = this.getName();

		const node = visit(this.node, {
			OperationDefinition: (
				definition: OperationDefinitionNode,
			): OperationDefinitionNode => {
				return merge(definition, {
					selectionSet: {
						selections: definition.selectionSet.selections.map((node) =>
							Operation.getNamespacedSelectionNode(
								node,
								sourceMap,
								operationName,
							),
						),
					},
				});
			},
			FragmentSpread: (node: FragmentSpreadNode): FragmentSpreadNode => {
				return Operation.getNamespacedFragmentSpread(
					sourceMap,
					operationName,
					node,
				);
			},
		});

		return new Operation(node);
	}

	private static getNamespacedSelectionNode(
		selection: SelectionNode,
		sourceMap: RequestSourceMapWriter,
		operationName: string | null,
	): SelectionNode {
		if (selection.kind === Kind.FIELD) {
			const aliasValue = sourceMap.newNamespacedFieldName(
				operationName,
				selection.alias?.value ?? null,
				selection.name.value,
			);

			return {
				...selection,
				alias: { kind: Kind.NAME, value: aliasValue },
			};
		}

		if (selection.kind === Kind.FRAGMENT_SPREAD) {
			return Operation.getNamespacedFragmentSpread(
				sourceMap,
				operationName,
				selection,
			);
		}

		return { ...selection };
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
}
