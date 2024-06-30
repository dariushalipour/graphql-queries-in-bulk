import gql from "graphql-tag";
import {
	print,
	type DocumentNode,
	type OperationDefinitionNode,
} from "graphql";
import type { BundledRequest } from "./BundledRequest";
import { RequestPayload } from "./RequestPayload";
import { SourceMap } from "./SourceMap";

export class RequestBundler {
	private readonly payloads: RequestPayload[];
	private readonly sourceMap: SourceMap = new SourceMap();

	constructor(RequestPayloads: string[]) {
		this.payloads = RequestPayloads.map((x, requestIndex) =>
			RequestPayload.fromString(x).namespaced(
				String(requestIndex),
				this.sourceMap,
			),
		);
	}

	execute(): BundledRequest {
		const sampleDocument = gql`
			query BundledQuery($y: String!) {
				x
			}
		`;

		const operationDef = sampleDocument
			.definitions[0] as OperationDefinitionNode;

		const documentNode = {
			...sampleDocument,
			definitions: [
				{
					...operationDef,
					variableDefinitions: this.payloads.flatMap((payload) =>
						payload.getVariableDefinitions(),
					),
					selectionSet: {
						...operationDef.selectionSet,
						selections: this.payloads.flatMap((payload) => payload.getFields()),
					},
				},
			],
		} satisfies DocumentNode;

		const variableEntries = this.payloads.flatMap((x) =>
			x.variables ? Object.entries(x.variables) : [],
		);

		const variables =
			variableEntries.length > 0 ? Object.fromEntries(variableEntries) : null;

		return {
			output: JSON.stringify(
				Object.fromEntries(
					[
						["operationName", "BundledQuery"],
						["query", print(documentNode)],
						["variables", variables],
					].filter(([_, value]) => Boolean(value)),
				),
			),
			sourceMap: this.sourceMap,
		};
	}
}
