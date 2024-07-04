import type { DocumentNode } from "graphql";
import { DocumentHelper } from "../infra/DocumentHelper";
import type { JsonObject } from "./JsonObject";
import { Variables } from "./Variables";

type RequestPayloadPlainObject = {
	operationName?: string;
	query: string;
	variables?: JsonObject;
};

export class RequestPayload {
	public constructor(
		public readonly operationName: string | null,
		public readonly document: DocumentNode,
		public readonly variables: Variables,
	) {}

	public static empty(operationName: string): RequestPayload {
		return new RequestPayload(
			operationName,
			DocumentHelper.empty(operationName),
			Variables.empty(),
		);
	}

	public static fromString(payloadString: string): RequestPayload {
		const { operationName, query, variables } = JSON.parse(payloadString);

		return new RequestPayload(
			operationName ?? null,
			DocumentHelper.stringToDocument(query),
			new Variables(variables ?? {}),
		);
	}

	public toPlainObject(): RequestPayloadPlainObject {
		return Object.fromEntries(
			[
				["operationName", this.operationName],
				["query", DocumentHelper.documentToString(this.document)],
				["variables", this.variables.toPayloadVariablesString()],
			].filter(([_, v]) => Boolean(v)),
		);
	}

	public toString(): string {
		return JSON.stringify(this.toPlainObject());
	}
}
