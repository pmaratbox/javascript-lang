# 0478 — Conditional

Renders a fixed template with the `handlebars` engine using its built-in `{{#if}}/{{else}}/{{/if}}` block helper. The template branches on the `logged_in` value: when truthy it emits `welcome`, otherwise `guest`. With the fixed data `{ logged_in: true }` the rendered output is `welcome`.

## Run

    node main.js
