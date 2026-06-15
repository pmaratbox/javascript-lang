# 0511 — Mutation

Builds a GraphQL schema with the `graphql` (graphql-js) library that exposes a `Mutation` type whose `addUser(name: String!): User` field returns a `User` with a `name`. The mutation is executed entirely in-process with `graphql({ schema, source, rootValue })` (no HTTP server); the `addUser` resolver constructs the `User` from its argument and the printed value is read back from the execution result at `res.data.addUser.name`. The output is `bob`.

## Run

    node main.js
