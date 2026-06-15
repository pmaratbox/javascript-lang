# 0477 — Variable substitution

Uses the Handlebars template engine to render a fixed template containing a `{{name}}` variable expression. `Handlebars.compile` parses the template source into a render function, which is then called with the data `{ name: 'alice' }` to substitute the variable.

## Run

    node main.js
