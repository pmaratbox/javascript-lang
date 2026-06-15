# 0495 — Path parameter

Defines an `express` route `GET /users/:id` whose handler echoes the captured path parameter via `req.params.id`. The route is exercised in-process with `supertest` (which binds an ephemeral port internally, never a fixed one), and the program prints `res.text` — the real HTTP response body. Requesting `/users/42` yields `42`.

## Run

    node main.js
