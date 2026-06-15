# 0504 — Error handler

Uses the `express` web framework's error-handling middleware to turn a thrown error into a `500` response. The `GET /boom` handler throws a real `Error`; an error-handling middleware (a function with four arguments `(err, req, res, next)`) catches it and calls `res.status(500)`. The route is exercised in-process with `supertest`, which mounts the app on an ephemeral port (no fixed listener), and the program prints the real `res.statusCode` returned by the framework — `500` — rather than a hardcoded value. Express's default error logging is silenced so only the status prints.

## Run

    node main.js
