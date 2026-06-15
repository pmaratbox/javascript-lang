# 0500 — Request header

Uses the `express` web framework with the `supertest` in-process test client to exercise a route without binding a fixed port. The `GET /whoami` handler reads the incoming `X-Name` request header via `req.get('X-Name')` and echoes it as the response body. The test client issues the request with `.set('X-Name', 'alice')` and the program prints the response body (`res.text`), which is the real value returned by the framework: `alice`.

## Run

    node main.js
