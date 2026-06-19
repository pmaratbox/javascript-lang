# 0616 — Response status code

Uses the built-in global `fetch` client to call an in-process `node:http` server bound to a loopback ephemeral port (`listen(0, "127.0.0.1")`). The `/hello` route returns 200, and we read the integer status code from the `Response.status` property returned by the client call.

## Run

    node main.js
