import {
	type DefinitionNode,
	type DocumentNode,
	type FragmentDefinitionNode,
	type OperationDefinitionNode,
	type SelectionSetNode,
	parse,
	print,
	visit,
} from "graphql";
import { DocumentHelper } from "../infra/DocumentHelper";
import { Fragments } from "./Fragments";
import { Operation } from "./Operation";
import type { RequestSourceMapWriter } from "./SourceMap/RequestSourceMapWriter";

export class Document {
	private constructor(
		private readonly sourceNode: DocumentNode,
		private readonly operation: Operation,
		private readonly fragments: Fragments,
	) {}

	public static empty(operationName: string): Document {
		const node = visit(parse(`query ${operationName} {x}`), {
			SelectionSet: (selectionSet: SelectionSetNode): SelectionSetNode => ({
				...selectionSet,
				selections: [],
			}),
		});

		return Document.fromDocumentNode(node);
	}

	private static fromDocumentNode(node: DocumentNode): Document {
		return new Document(
			node,
			Operation.fromOperationNode(DocumentHelper.getOperationDefinition(node)),
			Fragments.fromFragmentDefinitionNodes(
				node.definitions.filter((definition) =>
					Document.isFragment(definition),
				),
			),
		);
	}

	public static fromString(string: string): Document {
		const documentNode = parse(string);
		return Document.fromDocumentNode(documentNode);
	}

	public toString(): string {
		return print(this.toDocumentNode());
	}

	public hasOnlyQueryAndFragments(): boolean {
		for (const definition of this.sourceNode.definitions) {
			if (Document.isQuery(definition) || Document.isFragment(definition)) {
				continue;
			}

			return false;
		}

		return true;
	}

	public hasExactlyOneQueryOperation(): boolean {
		const queryOperations = this.sourceNode.definitions.filter((def) =>
			Document.isQuery(def),
		);
		return queryOperations.length === 1;
	}

	public namespaced(sourceMap: RequestSourceMapWriter): Document {
		const fragments = this.fragments.namespaced(
			this.operation.getName(),
			sourceMap,
		);

		const operation = this.operation.namespaced(sourceMap);

		return new Document(this.sourceNode, operation, fragments);
	}

	public getOperationName(): string | null {
		return this.operation.getName();
	}

	public mergedWith(document: Document): Document {
		const node = DocumentHelper.mergeDocuments([
			this.toDocumentNode(),
			document.toDocumentNode(),
		]);
		return Document.fromDocumentNode(node);
	}

	public toDocumentNode(): DocumentNode {
		return {
			...this.sourceNode,
			definitions: [
				...this.fragments.toFragmentDefinitionNodes(),
				this.operation.toOperationNode(),
			],
		};
	}

	hasOnlyFieldsOnItsQueryRoot(): boolean {
		return this.operation.hasOnlyFieldsOnItsQueryRoot();
	}

	private static isQuery(
		definition: DefinitionNode,
	): definition is OperationDefinitionNode {
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "query"
		);
	}

	private static isFragment(
		definition: DefinitionNode,
	): definition is FragmentDefinitionNode {
		return definition.kind === "FragmentDefinition";
	}
}
