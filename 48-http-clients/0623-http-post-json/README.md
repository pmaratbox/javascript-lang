# 0623 — POST JSON, parse JSON

Uses the built-in global `fetch` HTTP client to POST a JSON body to an in-process `node:http` server bound to an ephemeral loopback port (`listen(0, "127.0.0.1")`, no external network, no printed port). The server's `POST /double` route reads `{"x":N}` and replies `{"doubled":2N}`; the client sends `{"x":5}`, parses the JSON reply with `response.json()`, and prints the doubled value.

## Run

    node main.js
