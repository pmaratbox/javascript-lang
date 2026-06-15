# 0499 — Custom status

Uses the `express` web framework to return a custom HTTP status code. The `POST /create` route calls `res.status(201)` to respond with `201 Created`. The route is exercised in-process with `supertest`, which mounts the app on an ephemeral port (no fixed listener), and the program prints the real `res.statusCode` returned by the framework — `201` — rather than a hardcoded value.

## Run

    node main.js
