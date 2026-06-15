# 0503 — Method routing

The Express app registers two handlers on the same path `/item` — one for `GET` (returns `get`) and one for `POST` (returns `post`) — so Express dispatches by HTTP method. The route is exercised in-process with `supertest`, which drives Express directly on an ephemeral port (no fixed port and no startup logging), and the program prints the value taken from the actual `POST /item` response body (`res.text`).

## Run

    node main.js
