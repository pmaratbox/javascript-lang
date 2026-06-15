# 0507 — Object field

Defines a GraphQL schema with an object type `User` and a `Query.user` field using the `graphql` (graphql-js) library, then executes the query `{ user { name } }` in-process with `graphql()` (no HTTP server). The `user` resolver returns an object `{ name: 'alice' }`, and the selected field is read from `res.data.user.name`. The output is `alice`.

## Run

    node main.js
