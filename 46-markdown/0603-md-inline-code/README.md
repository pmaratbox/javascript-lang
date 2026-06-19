# 0603 — Inline code

Uses the [markdown-it](https://github.com/markdown-it/markdown-it) Markdown library (configured with the `commonmark` preset) to render a backtick-wrapped inline code span — `` `code` `` — to HTML, then strips the trailing newline before printing `<p><code>code</code></p>`.

## Run

    node main.js
