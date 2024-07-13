import { Document } from "./Document";
import type { RequestPayloadPlainObject } from "./RequestPayloadPlainObject";
import { Variables } from "./Variables";

export class RequestPayload {
	public constructor(
		public readonly operationName: string | null,
		public readonly document: Document,
		public readonly variables: Variables,
	) {}

	public static empty(operationName: string): RequestPayload {
		return new RequestPayload(
			operationName,
			Document.empty(operationName),
			Variables.empty(),
		);
	}

	public static fromString(payloadString: string): RequestPayload {
		const { operationName, query, variables } = JSON.parse(payloadString);

		return new RequestPayload(
			operationName ?? null,
			Document.fromString(query),
			new Variables(variables ?? {}),
		);
	}

	public toPlainObject(): RequestPayloadPlainObject {
		return Object.fromEntries(
			[
				["operationName", this.operationName],
				["query", this.document.toString()],
				["variables", this.variables.toPayloadVariablesString()],
			].filter(([_, v]) => Boolean(v)),
		);
	}

	public toString(): string {
		return JSON.stringify(this.toPlainObject());
	}
}
