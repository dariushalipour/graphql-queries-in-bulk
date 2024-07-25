import type { GraphQLFormattedError } from "graphql";
import type { JsonObject } from "../JsonObject";

export interface ReadOnlySourceMap {
	getSourceResponseData(
		requestId: string,
		namespacedResponseBody: JsonObject,
	): JsonObject;

	getSourceResponseErrors(
		requestId: string,
		errors: GraphQLFormattedError[] | undefined,
	): object[] | undefined;
}
