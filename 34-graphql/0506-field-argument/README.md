# 0506 — Field argument

Using the real `graphql` (graphql-js) library, this lesson builds a schema with `buildSchema` and executes a query in-process with `graphql()`. It demonstrates a field argument: `Query.greet(name: String!)` receives the `name` argument in its resolver and returns `'hello ' + name`. The query `{ greet(name: "alice") }` is executed and the resolved value is extracted from `res.data.greet`.

## Run

    node main.js
