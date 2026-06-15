# 0496 — Query parameter

This lesson uses the Express web framework. The route `GET /greet` reads the
`name` query-string parameter via `req.query.name` and returns `hello ` + that
value. The route is exercised in-process with the `supertest` test client
(`request(app).get(...)`), which drives the app on an ephemeral port instead of
binding a fixed listening port, and the real HTTP response body is printed.

## Run

    node main.js
