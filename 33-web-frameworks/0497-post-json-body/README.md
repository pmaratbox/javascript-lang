# 0497 — POST JSON body

The Express app mounts the built-in `express.json()` middleware so the request body is parsed into `req.body`, then a `POST /sum` route reads `a` and `b` and returns their sum as JSON. The route is exercised in-process with `supertest`, which drives Express directly on an ephemeral port (no fixed port and no startup logging), and the program prints the value taken from the actual response body (`res.body`).

## Run

    node main.js
