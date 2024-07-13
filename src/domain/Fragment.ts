import {
	type DefinitionNode,
	type FragmentDefinitionNode,
	Kind,
	visit,
} from "graphql";
import type { RequestSourceMapWriter } from "./SourceMap/RequestSourceMapWriter";

export class Fragment {
	private constructor(private readonly node: FragmentDefinitionNode) {}

	public static fromFragmentDefinitionNode(
		fragmentDefinitionNode: FragmentDefinitionNode,
	): Fragment {
		return new Fragment(fragmentDefinitionNode);
	}

	public toFragmentDefinitionNode(): DefinitionNode {
		return { ...this.node };
	}

	public namespaced(
		operationName: string | null,
		sourceMap: RequestSourceMapWriter,
	): Fragment {
		const node = visit(this.node, {
			FragmentDefinition: (
				node: FragmentDefinitionNode,
			): FragmentDefinitionNode => {
				return Fragment.getNamespacedFragmentDefinition(
					node,
					sourceMap,
					operationName,
				);
			},
		});

		return new Fragment(node);
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
}
