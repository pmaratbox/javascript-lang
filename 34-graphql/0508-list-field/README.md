# 0508 — List field

Uses the `graphql` (graphql-js) library to define a schema whose `Query.numbers` field returns a GraphQL list of scalars (`[Int]`). The query `{ numbers }` is executed in-process with `graphql({ schema, source, rootValue })`, where the resolver returns `[1, 2, 3]`. The resolved list is read from `res.data.numbers` and each element is printed on its own line.

## Run

    node main.js
