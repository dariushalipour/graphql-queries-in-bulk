import { expect, mock } from "bun:test";
import { Before, Given, Then, When } from "@cucumber/cucumber";
import { isEqual } from "lodash";
import { ServerProxy } from "../../src/application/ServerProxy.js";
import { RequestPayload } from "../../src/domain/RequestPayload.js";

/**
 * @type {ServerProxy}
 */
let serverProxy;

/**
 * @type {any}
 */
let fetchFunc;

/**
 * @type {Request[]}
 */
let fetchFuncRequests;

/**
 * @type {Promise<Response>[]}
 */
let proxyResponses;

/**
 * @type {Record<string, string>}
 */
let serverResponseMocks;

/**
 * @type {number|undefined}
 */
let bundleRequestCountMax;

/**
 * @type {'short'|'with-operation-name'|undefined}
 */
let namespacingStrategy;

/**
 * @type {number}
 */
let bundlingIntervalMs = 1 * 1000;

function remakeServerProxy() {
	serverProxy = new ServerProxy({
		fetchFunc,
		bundlingIntervalMs,
		bundleRequestCountMax,
		namespacingStrategy,
	});
}

Before(() => {
	fetchFuncRequests = [];
	proxyResponses = [];
	serverResponseMocks = {};
	bundlingIntervalMs = 1 * 1000;
	bundleRequestCountMax = undefined;
	namespacingStrategy = undefined;
	fetchFunc = mock(
		/**
		 *
		 * @param {Request} request
		 * @returns
		 */
		async (request) => {
			fetchFuncRequests.push(request);
			const payloadString = await request.clone().text();
			const payload = RequestPayload.fromString(payloadString);
			const queryName = payload.getOperationName();

			const serverResponseBody = serverResponseMocks[queryName ?? "Nameless"];
			if (!serverResponseBody) {
				throw new Error(`unexpected request arrived. ${payloadString}`);
			}
			return new Response(serverResponseBody);
		},
	);

	remakeServerProxy();
});

Given(
	"server responds {string} with",
	/**
	 * @param {string} queryName
	 * @param {string} responsePayloadString
	 */
	(queryName, responsePayloadString) => {
		serverResponseMocks = {
			...serverResponseMocks,
			[queryName]: responsePayloadString,
		};
	},
);

Given(
	"the following request comes in",
	/**
	 * @param {string} requestPayloadString
	 */
	(requestPayloadString) => {
		const request = new Request("https://server/graphql", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: requestPayloadString,
		});

		proxyResponses.push(serverProxy.submitRequest(request));
	},
);

Given(
	"bundleRequestCountMax is set to {int}",
	/**
	 * @param {number} newValueForBundleRequestCountMax
	 */
	(newValueForBundleRequestCountMax) => {
		bundleRequestCountMax = newValueForBundleRequestCountMax;
		remakeServerProxy();
	},
);

Given(
	"namespacingStrategy is set to {string}",
	/**
	 * @param {'short'|'with-operation-name'} newValueForNamespacingStrategy
	 */
	(newValueForNamespacingStrategy) => {
		namespacingStrategy = newValueForNamespacingStrategy;
		remakeServerProxy();
	},
);

Then(
	"the bundled request should look like this",
	/**
	 * @param {string} requestPayloadString
	 */
	async (requestPayloadString) => {
		const [request] = fetchFuncRequests;
		const actualRequestPayload = await request.clone().json();
		const expectedRequestPayload = RequestPayload.fromString(
			requestPayloadString.trim(),
		).toPlainObject();

		expect(actualRequestPayload).toEqual(expectedRequestPayload);
	},
);

Then(
	"the bundled request #{int} should look like this",
	/**
	 * @param {number} requestIndexPlusOne
	 * @param {string} requestPayloadString
	 */
	async (requestIndexPlusOne, requestPayloadString) => {
		const request = fetchFuncRequests[requestIndexPlusOne - 1];
		const actualRequestPayload = await request.clone().json();
		const expectedRequestPayload = RequestPayload.fromString(
			requestPayloadString.trim(),
		).toPlainObject();

		expect(actualRequestPayload).toEqual(expectedRequestPayload);
	},
);

Then(
	"the server should be called with",
	/**
	 * @param {string} requestPayloadString
	 */
	async (requestPayloadString) => {
		const [request] = fetchFuncRequests;
		const actualRequestPayload = await request.clone().json();
		const expectedRequestPayload = RequestPayload.fromString(
			requestPayloadString.trim(),
		).toPlainObject();

		expect(actualRequestPayload).toEqual(expectedRequestPayload);
	},
);

Then(
	"the server should also be called {int} times with",
	/**
	 * @param {number} times
	 * @param {string} requestPayloadString
	 */
	async (times, requestPayloadString) => {
		let matchingRequests = 0;

		for (const request of fetchFuncRequests) {
			const actualRequestPayload = await request.clone().json();
			const expectedRequestPayload = RequestPayload.fromString(
				requestPayloadString.trim(),
			).toPlainObject();

			if (isEqual(actualRequestPayload, expectedRequestPayload)) {
				matchingRequests++;
			}
		}

		expect(matchingRequests).toEqual(times);
	},
);

Then(
	"request number {int} should be responded with",
	/**
	 * @param {number} requestNumber
	 * @param {string} expectedResponseBodyString
	 */
	async (requestNumber, expectedResponseBodyString) => {
		const response = await proxyResponses[requestNumber - 1];
		const responseBody = await response.json();
		const expectedResponseBody = JSON.parse(expectedResponseBodyString);

		expect(responseBody).toEqual(expectedResponseBody);
	},
);

When("the bundling interval is hit", async () => {
	await serverProxy.forceExecute();
});
