# 0484 — List length

Renders the length of a list with the `handlebars` template engine. Handlebars exposes a JavaScript array's `length` property directly in a path expression (`{{items.length}}`), so compiling that template against `{ items: [1, 2, 3] }` produces the list size.

## Run

    node main.js
