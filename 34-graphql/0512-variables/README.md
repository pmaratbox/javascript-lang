# 0512 — Query variables

Uses the real `graphql` (graphql-js) library to define a schema with `Query.item(id: Int!): Item` and execute the query `query($id: Int!) { item(id: $id) { id } }` in-process via `graphql({ schema, source, rootValue, variableValues })`. The `$id` argument is supplied through the execution's `variableValues` map (GraphQL variables) rather than being interpolated into the query string. The resolved `data.item.id` value is printed, yielding `42`.

## Run

    node main.js
