import {
	type DocumentNode,
	type OperationDefinitionNode,
	print,
	parse,
} from "graphql";
import { isNil, omitBy } from "lodash";
import type { BundledRequest } from "./BundledRequest";
import { RequestPayload } from "./RequestPayload";
import { SourceMap } from "./SourceMap";
import type { VariableValue } from "./VariableValue";
import type { NamespacingStrategy } from "./NamespacingStrategy";

export class RequestBundler {
	private readonly payloads: RequestPayload[];
	private readonly sourceMap: SourceMap;

	constructor(
		private readonly namespacingStrategy: NamespacingStrategy,
		RequestPayloads: string[],
	) {
		this.sourceMap = new SourceMap(this.namespacingStrategy);

		this.payloads = RequestPayloads.map((x, requestIndex) =>
			RequestPayload.fromString(x).namespaced(
				String(requestIndex),
				this.sourceMap,
			),
		);
	}

	private getBundledOperationName(): string {
		const constantName = "BundledQuery";

		if (this.namespacingStrategy === "short") {
			return constantName;
		}

		if (this.namespacingStrategy === "with-operation-name") {
			return [
				constantName,
				...this.payloads.map((p) => p.getOperationName()).filter(Boolean),
			].join("_");
		}

		this.namespacingStrategy satisfies never;

		throw new TypeError(
			`unknown namespacingStrategy: "${this.namespacingStrategy}"`,
		);
	}

	private bundleDocuments(): DocumentNode {
		const sampleDocument = parse(`
		query ${this.getBundledOperationName()}($y: String!) {
			x
		}`);

		return {
			...sampleDocument,
			definitions: [this.bundleOperations(sampleDocument)],
		};
	}

	private bundleOperations(
		sampleDocument: DocumentNode,
	): OperationDefinitionNode {
		const operationDef = sampleDocument
			.definitions[0] as OperationDefinitionNode;

		return {
			...operationDef,
			variableDefinitions: this.payloads.flatMap((payload) =>
				payload.getVariableDefinitions(),
			),
			selectionSet: {
				...operationDef.selectionSet,
				selections: this.payloads.flatMap((payload) => payload.getFields()),
			},
		};
	}

	private bundleVariables(): Record<string, VariableValue> | null {
		const variableEntries = this.payloads.flatMap((x) =>
			x.variables ? Object.entries(x.variables) : [],
		);

		return variableEntries.length > 0
			? Object.fromEntries(variableEntries)
			: null;
	}

	execute(): BundledRequest {
		const output = {
			operationName: this.getBundledOperationName(),
			query: print(this.bundleDocuments()),
			variables: this.bundleVariables(),
		};

		return {
			output: JSON.stringify(omitBy(output, isNil)),
			sourceMap: this.sourceMap,
		};
	}
}
