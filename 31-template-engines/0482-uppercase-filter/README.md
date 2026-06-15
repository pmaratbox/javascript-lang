# 0482 — Uppercase filter

Uses the Handlebars template engine to apply an uppercase transformation via a custom helper. `Handlebars.registerHelper('upper', ...)` defines a helper that calls `String.prototype.toUpperCase`, and the template `{{upper name}}` invokes it on the `name` value `alice`, producing `ALICE`.

## Run

    node main.js
