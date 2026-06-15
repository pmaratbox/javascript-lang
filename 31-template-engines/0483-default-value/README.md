# 0483 — Default value

Renders a fixed template with the `handlebars` engine using its built-in `{{#if}}/{{else}}/{{/if}}` block helper to supply a default. The data has no `name` field, so the `{{#if name}}` branch is falsy and the `{{else}}` branch emits the fallback `anonymous`. With the fixed data `{}` the rendered output is `anonymous`.

## Run

    node main.js
