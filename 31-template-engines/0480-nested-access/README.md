# 0480 — Nested access

Handlebars resolves dotted paths against the data context, so `{{user.name}}` reaches into the nested `user` object and renders its `name` field.

## Run

    node main.js
