# 0602 — Link

Uses the [markdown-it](https://github.com/markdown-it/markdown-it) Markdown library (constructed with the `commonmark` preset) to render an inline link `[text](http://x.com)` to HTML, strips the trailing newline, and prints the resulting `<p><a href="...">text</a></p>`.

## Run

    node main.js
