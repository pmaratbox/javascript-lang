# 0621 — Read a response header

This lesson uses the built-in global `fetch` client to call an in-process `node:http` server
(bound to `127.0.0.1:0`, an ephemeral loopback port — no external network). The `GET /info`
route sets a custom response header `X-Count: 7`; the client reads it back via
`response.headers.get("x-count")` and prints the value.

## Run

    node main.js
