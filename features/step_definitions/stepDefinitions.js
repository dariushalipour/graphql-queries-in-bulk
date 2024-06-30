import { expect, mock } from "bun:test";
import { RequestPayload } from "../../src/domain/RequestPayload.js";
import { Given, When, Then, Before } from "@cucumber/cucumber";
import { ServerProxy } from "../../src/application/ServerProxy.js";

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
 * @type {string}
 */
let serverResponseBody;

Before(() => {
	const bundlingIntervalMs = 1 * 1000;
	fetchFuncRequests = [];
	proxyResponses = [];
	fetchFunc = mock(async (request) => {
		fetchFuncRequests.push(request);
		return new Response(serverResponseBody);
	});
	serverProxy = new ServerProxy({ fetchFunc, bundlingIntervalMs });
});

/**
 * @param {string} expectedServerResponse
 */
Given("server response is", (expectedServerResponse) => {
	serverResponseBody = expectedServerResponse;
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
