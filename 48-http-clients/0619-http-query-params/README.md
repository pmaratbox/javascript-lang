# 0619 — Query parameters

This lesson uses the built-in global `fetch` client to send a query parameter to an in-process `node:http` server bound to an ephemeral loopback port (`listen(0, "127.0.0.1")`). The server route `GET /greet` reads the `name` query parameter and returns `hi <name>`; the client requests `/greet?name=Bob` and prints the response body. No external network is used and the port is never printed.

## Run

    node main.js
