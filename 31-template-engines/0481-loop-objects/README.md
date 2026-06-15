# 0481 — Loop over objects

Uses the Handlebars template engine to iterate a list of objects with the `{{#each}}` block helper. `Handlebars.compile` parses the fixed template source into a render function; given `users` as an array of `{ name, age }` objects, the `{{#each users}}` block renders `name: age` per element. The `{{#unless @last}}` guard inserts a newline between items but not after the final one.

## Run

    node main.js
