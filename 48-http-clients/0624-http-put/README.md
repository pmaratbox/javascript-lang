# 0624 — PUT request

This lesson uses the global `fetch` HTTP client to send a `PUT` request to a tiny in-process `node:http` server bound to an ephemeral loopback port (`listen(0, "127.0.0.1")`). The server exposes only `PUT /item`, which returns the text `updated`. No external network is used and the port is never printed.

## Run

    node main.js
