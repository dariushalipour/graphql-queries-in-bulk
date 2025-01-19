import { expect, it, mock } from "bun:test";
import { ServerProxy } from "../src/application/ServerProxy";

function makeRequest() {
	return new Request("https://server/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: "{\n  r0f0\n}",
		}),
	});
}

function makeResponse() {
	return new Response(JSON.stringify({ data: { fieldA: 10 } }));
}

it("should call the fetchFunc without rebinding it to a new context", async () => {
	let resolveFunc: (value: unknown) => void;
	const thisPromise = new Promise((resolve) => {
		resolveFunc = resolve;
	});

	const mockFetch = mock(async function () {
		// @ts-expect-error
		resolveFunc(this);

		return makeResponse();
	});

	const serverProxy = new ServerProxy({ fetchFunc: mockFetch });
	serverProxy.submitRequest(makeRequest());
	serverProxy.forceExecute();

	expect(await thisPromise).toEqual(undefined);
});
