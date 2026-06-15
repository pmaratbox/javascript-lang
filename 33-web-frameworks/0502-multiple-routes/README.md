# 0502 — Multiple routes

Registers two routes with the `express` web framework — `GET /` returning `home` and `GET /about` returning `about` — and exercises both in-process with `supertest`, which dispatches each request straight to the Express app object without binding a fixed listening port. Each response body (`res.text`) is read from the real HTTP response and printed on its own line, giving `home` then `about`.

## Run

    node main.js
