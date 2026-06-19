# 0615 — GET request

This lesson uses JavaScript's built-in `fetch` HTTP client to make a `GET` request against an in-process `node:http` server bound to an ephemeral loopback port (`listen(0, "127.0.0.1")`). The server exposes a single route `GET /hello` returning the text `hello world`; the client fetches it, reads the response body with `.text()`, and prints it. No external network and no port number are involved.

## Run

    node main.js
