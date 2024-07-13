import type { JsonObject } from "./JsonObject";

export type RequestPayloadPlainObject = {
	operationName?: string;
	query: string;
	variables?: JsonObject;
};
