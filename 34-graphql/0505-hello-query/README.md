# 0505 — Hello query

Builds a GraphQL schema with the `graphql` (graphql-js) library using `buildSchema`, then executes the query `{ hello }` entirely in-process via `graphql()` — no HTTP server is involved. The `hello` field is backed by a resolver on `rootValue` that returns `'world'`, and the program prints the value extracted from the execution result (`res.data.hello`). The output is `world`.

## Run

    node main.js
