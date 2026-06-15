# 0498 — 404 status

Uses the `express` web framework exercised IN-PROCESS with `supertest` (no fixed listening port). A `GET /missing` request hits a route that was never defined, so Express's default handling returns a `404`. The program prints the real response status code pulled from the framework's HTTP response (`res.statusCode`), not a hardcoded value.

## Run

    node main.js
