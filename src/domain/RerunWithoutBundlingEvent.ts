import type { GraphQLFormattedError } from "graphql";

export type RerunWithoutBundlingEvent = {
	reason: "GRAPHQL_SERVER_ERROR";
	originalRequests: {
		operationName?: string;
		query: string;
		variables?: object;
	}[];
	bundledRequest: {
		query: string;
		variables?: object;
	};
	errors?: GraphQLFormattedError[];
};
