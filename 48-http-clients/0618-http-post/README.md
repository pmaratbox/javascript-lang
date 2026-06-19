# 0618 — POST a body

Uses the built-in global `fetch` client to call an in-process `node:http` server bound to a loopback ephemeral port (`listen(0, "127.0.0.1")`). The `POST /echo` route reads the request body and returns it verbatim; we send the text `ping` via `fetch(..., { method: "POST", body: "ping" })` and print the response body read from the client call.

## Run

    node main.js
