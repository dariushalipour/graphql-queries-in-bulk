## What Problem This Library Solves

When following architectures like [Hexagonal](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)) or using federated microfrontends, you often end up with multiple GraphQL clients. This can lead to over 30 simultaneous GraphQL HTTP requests, hammering your server with repetitive tasks.

## How This Library Solves It

`graphql-queries-in-bulk` intercepts these network calls using a [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). It debounces the requests, bundles them into a single request, and sends it to the server. When the server responds, the library distributes the response to the original requests.

## Near Zero Implementation Cost

Your application only needs the Service Worker. It’s easily installable and removable without affecting your service.

## Usage Example

```js
// service-worker.js

import { ServerProxy } from "graphql-queries-in-bulk";

const serverProxy = new ServerProxy({
	bundlingIntervalMs: 100,
	bundleRequestCountMax: 10,
	onRerunWithoutBundling: (event) => {
		// The rerun happens automatically.
		// This listener is only for logging occurrences.
	}
});

self.addEventListener("fetch", (event) => {
	if (new URL(event.request.url).pathname === "/graphql") {
		event.respondWith(serverProxy.submitRequest(event.request));
	}
});
```
