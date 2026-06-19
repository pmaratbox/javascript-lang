# 0617 — Parse JSON response

This lesson uses JavaScript's built-in `fetch` HTTP client to make a `GET` request against an in-process `node:http` server bound to an ephemeral loopback port (`listen(0, "127.0.0.1")`). The server exposes a single route `GET /user` returning the JSON body `{"name":"Alice","age":30}`; the client fetches it, parses the response with `.json()`, and prints the `name` field. No external network and no port number are involved.

## Run

    node main.js
