# 0509 — Nested object

Builds a GraphQL schema with the `graphql` (graphql-js) library where `Query.user` returns a `User` object that itself holds an `Address` object, then executes the query `{ user { address { city } } }` in-process with `graphql()`. This demonstrates selecting a field through nested object types: the resolver supplies the structured value and the engine walks `user.address.city`. The resolved value is read from `res.data.user.address.city`, printing `oslo`.

## Run

    node main.js
