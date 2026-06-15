# 0501 — Middleware

Uses the `express` web framework with the `supertest` in-process test client to exercise a route without binding a fixed port. A middleware registered with `app.use` wraps `res.send` so that every response body is prefixed with `[mw] `. The `GET /` handler simply returns `hello`, but because the middleware runs first the actual response body becomes `[mw] hello`. The test client issues the request in-process and the program prints `res.text`, the real body produced by the framework — the prefix comes from the middleware, not the handler.

## Run

    node main.js
