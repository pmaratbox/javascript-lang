# 0494 — JSON response

Express serves a `GET /user` route with `res.json({ name: 'alice' })`, and the route is exercised in-process by supertest (no fixed port — supertest binds an ephemeral port for the call). The parsed response body `res.body` is re-serialized compactly to print `{"name":"alice"}`.

## Run

    node main.js
