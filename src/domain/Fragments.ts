import type { DefinitionNode, FragmentDefinitionNode } from "graphql";
import { Fragment } from "./Fragment";
import type { RequestSourceMapWriter } from "./SourceMap/RequestSourceMapWriter";

export class Fragments {
	private constructor(private readonly fragments: Fragment[]) {}

	public static fromFragmentDefinitionNodes(
		fragmentDefinitionNodes: FragmentDefinitionNode[],
	): Fragments {
		return new Fragments(
			fragmentDefinitionNodes.map((node) =>
				Fragment.fromFragmentDefinitionNode(node),
			),
		);
	}

	public toFragmentDefinitionNodes(): DefinitionNode[] {
		return this.fragments.map((fragment) =>
			fragment.toFragmentDefinitionNode(),
		);
	}

	public namespaced(
		operationName: string | null,
		sourceMap: RequestSourceMapWriter,
	): Fragments {
		const fragments = this.fragments.map((fragment) =>
			fragment.namespaced(operationName, sourceMap),
		);

		return new Fragments(fragments);
	}
}
