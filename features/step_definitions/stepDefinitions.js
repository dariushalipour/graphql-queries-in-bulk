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
let serverResponseMocks = {};

Before(() => {
	const bundlingIntervalMs = 1 * 1000;
	fetchFuncRequests = [];
	proxyResponses = [];
	serverResponseMocks = {};
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
	serverProxy = new ServerProxy({ fetchFunc, bundlingIntervalMs });
});

/**
 * @param {string} queryName
 * @param {string} expectedServerResponse
 */
Given("server responds {string} with", (queryName, responsePayloadString) => {
	serverResponseMocks = {
		...serverResponseMocks,
		[queryName]: responsePayloadString,
	};
});

/**
 * @param {string} requestPayloadString
 */
Given("the following request comes in", (requestPayloadString) => {
	const request = new Request("https://server/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: requestPayloadString,
	});

	proxyResponses.push(serverProxy.submitRequest(request));
});

/**
 * @param {string} requestPayloadString
 */
Then(
	"the bundled request should look like this",
	async (requestPayloadString) => {
		const [request] = fetchFuncRequests;
		const actualRequestPayload = await request.clone().json();
		const expectedRequestPayload = RequestPayload.fromString(
			requestPayloadString.trim(),
		).toPlainObject();

		expect(actualRequestPayload).toEqual(expectedRequestPayload);
	},
);

/**
 * @param {string} requestPayloadString
 */
Then("the server should be called with", async (requestPayloadString) => {
	const [request] = fetchFuncRequests;
	const actualRequestPayload = await request.clone().json();
	const expectedRequestPayload = RequestPayload.fromString(
		requestPayloadString.trim(),
	).toPlainObject();

	expect(actualRequestPayload).toEqual(expectedRequestPayload);
});

/**
 * @param {number} times
 * @param {string} requestPayloadString
 */
Then(
	"the server should also be called {int} times with",
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

/**
 * @param {number} requestNumber
 * @param {string} expectedResponseBodyString
 */
Then(
	"request number {int} should be responded with",
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
