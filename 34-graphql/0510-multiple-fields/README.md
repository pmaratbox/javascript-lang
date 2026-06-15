# 0510 — Multiple fields

Builds a GraphQL schema with the `graphql` (graphql-js) library where the `Query.user` field returns a `User` object, then executes the query `{ user { name age } }` in-process with `graphql()` — no HTTP server. A GraphQL selection set can request multiple fields of an object at once; here `name` and `age` are both resolved in a single round-trip. The resolved values are read from `res.data.user` and printed on their own lines, giving `alice` and `30`.

## Run

    node main.js
