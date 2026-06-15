# 0479 — Loop

Renders a fixed template with the `handlebars` engine using its built-in `{{#each}}/{{/each}}` block helper to iterate a list. The template loops over `nums` and emits each value followed by a newline via `{{this}}`. With the fixed data `{ nums: [1, 2, 3] }` the rendered output is the three numbers, one per line.

## Run

    node main.js
