# 0588 — Descendant selector

Uses the `cheerio` HTML-parsing library to load a fixed HTML document and query it with the descendant CSS selector `.content p`, selecting every `<p>` inside `.content`, then extracting each element's text and joining the results with commas.

## Run

    node main.js
