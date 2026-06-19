# 0620 — Send a request header

This lesson uses the built-in global `fetch` client to send a custom request header to a tiny in-process `node:http` server bound to an ephemeral loopback port (`listen(0, "127.0.0.1")`). The route `GET /token` reads the `X-Token` header from the incoming request and echoes its value back in the response body. The client sends `X-Token: secret`, so the printed body is `secret`. The server is closed at the end and the port is never printed.

## Run

    node main.js
