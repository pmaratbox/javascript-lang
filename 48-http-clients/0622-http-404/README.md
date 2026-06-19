# 0622 — Handle 404

This lesson uses the global `fetch` HTTP client to call a tiny in-process `node:http` server bound to a loopback ephemeral port (`listen(0, "127.0.0.1")`, no external network). The server defines no routes, so a request to `/missing` falls through to a `404` response; we read `response.status` from the client call and print the integer status code.

## Run

    node main.js
