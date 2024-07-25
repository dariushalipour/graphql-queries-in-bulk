import { expect, mock } from "bun:test";
import { Before, Given, Then, When } from "@cucumber/cucumber";
import { isEqual, isNil, omitBy } from "lodash";
import { ServerProxy } from "../../src/application/ServerProxy.js";
import type { NamespacingStrategy } from "../../src/domain/NamespacingStrategy.js";
import { RequestPayload } from "../../src/domain/RequestPayload.js";
import type { RerunWithoutBundlingEvent } from "../../src/index.js";

let serverProxy: ServerProxy;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let fetchFunc: any;
let fetchFuncRequests: Request[];
let proxyResponses: Promise<Response>[];
let serverResponseMocks: Record<string, string>;
let bundleRequestCountMax: number | undefined;
let namespacingStrategy: NamespacingStrategy | undefined;
let rerunWithoutBundlingEvents: RerunWithoutBundlingEvent[] = [];
let onRerunWithoutBundling:
	| ((event: RerunWithoutBundlingEvent) => void)
	| undefined;
let bundlingIntervalMs: number = 1 * 1000;

function makeRequest(body: string): Request {
	return new Request("https://server/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: body,
	});
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function makeJsonRequest(body: { [key: string]: any }): Request {
	return new Request("https://server/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});
}

function remakeServerProxy(): void {
	serverProxy = new ServerProxy({
		fetchFunc,
		bundlingIntervalMs,
		bundleRequestCountMax,
		namespacingStrategy,
		onRerunWithoutBundling,
	});
}

function jsonBody(request: Request) {
	return request.clone().json();
}

function parsePayloadString(payloadString: string) {
	const { operationName, query, variables } = JSON.parse(payloadString.trim());

	return omitBy(
		{
			operationName,
			query,
			variables: variables && JSON.stringify(variables),
		},
		isNil,
	);
}

Before(() => {
	rerunWithoutBundlingEvents = [];
	fetchFuncRequests = [];
	proxyResponses = [];
	serverResponseMocks = {};
	bundlingIntervalMs = 1 * 1000;
	bundleRequestCountMax = undefined;
	namespacingStrategy = undefined;
	fetchFunc = mock(async (request: Request) => {
		fetchFuncRequests.push(request);
		const payloadString = await request.clone().text();
		const payload = RequestPayload.fromString(payloadString);
		const queryName = payload.operationName;

		const serverResponseBody = serverResponseMocks[queryName ?? "Nameless"];
		if (!serverResponseBody) {
			throw new Error(`unexpected request arrived. ${payloadString}`);
		}
		return new Response(serverResponseBody);
	});

	remakeServerProxy();
});

Given(
	"server responds {string} with",
	(queryName: string, responsePayloadString: string) => {
		serverResponseMocks = {
			...serverResponseMocks,
			[queryName]: responsePayloadString,
		};
	},
);

Given("the following request comes in", (requestPayloadString: string) => {
	const request = makeRequest(requestPayloadString);
	proxyResponses.push(serverProxy.submitRequest(request));
});

Given(
	"the following prettified request comes in",
	(prettifiedQuery: string) => {
		const request = makeJsonRequest({ query: prettifiedQuery.trim() });

		proxyResponses.push(serverProxy.submitRequest(request));
	},
);

Given(
	"the following prettified request named {string} comes in",
	(operationName: string, prettifiedQuery: string) => {
		const request = makeJsonRequest({
			operationName,
			query: prettifiedQuery.trim(),
		});

		proxyResponses.push(serverProxy.submitRequest(request));
	},
);

Given(
	"the following prettified request with variables {string} and named {string} comes in",
	(variables: string, operationName: string, prettifiedQuery: string) => {
		const request = makeJsonRequest({
			operationName,
			query: prettifiedQuery.trim(),
			variables: JSON.parse(variables),
		});

		proxyResponses.push(serverProxy.submitRequest(request));
	},
);

Given(
	"bundleRequestCountMax is set to {int}",
	(newValueForBundleRequestCountMax: number) => {
		bundleRequestCountMax = newValueForBundleRequestCountMax;
		remakeServerProxy();
	},
);

Given(
	"namespacingStrategy is set to {string}",
	(newValueForNamespacingStrategy: NamespacingStrategy) => {
		namespacingStrategy = newValueForNamespacingStrategy;
		remakeServerProxy();
	},
);

Given("a listener has been set for reports of rerun without bundling", () => {
	onRerunWithoutBundling = mock((event) =>
		rerunWithoutBundlingEvents.push(event),
	);
	remakeServerProxy();
});

Then(
	"the bundled request #{int} should look like this",
	async (requestIndexPlusOne: number, requestPayloadString: string) => {
		const request = fetchFuncRequests[requestIndexPlusOne - 1];
		const expectedRequestPayload = parsePayloadString(
			requestPayloadString.trim(),
		);

		expect(await jsonBody(request)).toEqual(expectedRequestPayload);
	},
);

Then(
	"the bundled request #{int} should be named {string} and look like this",
	async (
		requestIndexPlusOne: number,
		operationName: string,
		prettifiedQuery: string,
	) => {
		const request = fetchFuncRequests[requestIndexPlusOne - 1];

		expect(await jsonBody(request)).toEqual({
			operationName,
			query: prettifiedQuery.trim(),
		});
	},
);

Then(
	"the bundled request #{int} should have variables {string} and be named {string} and look like this",
	async (
		requestIndexPlusOne: number,
		variables: string,
		operationName: string,
		prettifiedQuery: string,
	) => {
		const request = fetchFuncRequests[requestIndexPlusOne - 1];

		expect(await jsonBody(request)).toEqual({
			operationName,
			query: prettifiedQuery.trim(),
			variables: JSON.parse(variables),
		});
	},
);

Then(
	"the server should be called with",
	async (requestPayloadString: string) => {
		const [request] = fetchFuncRequests;

		const expectedRequestPayload = parsePayloadString(requestPayloadString);

		expect(await jsonBody(request)).toEqual(expectedRequestPayload);
	},
);

Then(
	"the server should be called with a query named {string} looking like this",
	async (operationName: string, prettifiedQuery: string) => {
		const [request] = fetchFuncRequests;

		expect(await jsonBody(request)).toEqual({
			operationName,
			query: prettifiedQuery.trim(),
		});
	},
);

Then(
	"the server should be called with a query with variables {string} and named {string} looking like this",
	async (variables: string, operationName: string, prettifiedQuery: string) => {
		const [request] = fetchFuncRequests;

		expect(await jsonBody(request)).toEqual({
			operationName,
			query: prettifiedQuery.trim(),
			variables: JSON.parse(variables),
		});
	},
);

Then(
	"the server should also be called {int} times with",
	async (times: number, requestPayloadString: string) => {
		let matchingRequests = 0;

		for (const request of fetchFuncRequests) {
			const expectedRequestPayload = RequestPayload.fromString(
				requestPayloadString.trim(),
			).toPlainObject();

			if (isEqual(await jsonBody(request), expectedRequestPayload)) {
				matchingRequests++;
			}
		}

		expect(matchingRequests).toEqual(times);
	},
);

Then(
	"the server should also be called {int} times with a query named {string} looking like this",
	async (times: number, operationName: string, prettifiedQuery: string) => {
		const expectedRequestPayload = {
			operationName,
			query: prettifiedQuery.trim(),
		};

		let matchingRequests = 0;

		for (const request of fetchFuncRequests) {
			if (isEqual(await jsonBody(request), expectedRequestPayload)) {
				matchingRequests++;
			}
		}

		expect(matchingRequests).toEqual(times);
	},
);

Then(
	"the server should also be called {int} times with a query with variables {string} and named {string} looking like this",
	async (
		times: number,
		variables: string,
		operationName: string,
		prettifiedQuery: string,
	) => {
		const expectedRequestPayload = {
			operationName,
			query: prettifiedQuery.trim(),
			variables: JSON.parse(variables),
		};

		let matchingRequests = 0;

		for (const request of fetchFuncRequests) {
			const jsonBodyValue = await jsonBody(request);
			if (isEqual(jsonBodyValue, expectedRequestPayload)) {
				matchingRequests++;
			}
		}

		expect(matchingRequests).toEqual(times);
	},
);

Then(
	"request number {int} should be responded with",
	async (requestNumber: number, expectedResponseBodyString: string) => {
		const response = await proxyResponses[requestNumber - 1];
		const responseBody = await response.json();
		const expectedResponseBody = JSON.parse(expectedResponseBodyString);

		expect(responseBody).toEqual(expectedResponseBody);
	},
);

When("the bundling interval is hit", async () => {
	await serverProxy.forceExecute();
});

Then(
	"the rerun without bundling should be reported with the following details",
	(eventJsonString: string) => {
		const expectedEvent = JSON.parse(eventJsonString);

		expect(onRerunWithoutBundling).toBeCalledTimes(1);
		expect(rerunWithoutBundlingEvents).toEqual([expectedEvent]);
	},
);
