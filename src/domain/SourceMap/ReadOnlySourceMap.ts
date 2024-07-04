import type { JsonObject } from "../JsonObject";

export interface ReadOnlySourceMap {
	getSourceResponseData(
		requestId: string,
		namespacedResponseBody: JsonObject,
	): JsonObject;

	getSourceResponseErrors(
		requestId: string,
		errors: (object & { path: string[] })[] | undefined,
	): object[] | undefined;
}
