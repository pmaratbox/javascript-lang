# 0586 — Select all matching

Uses the `cheerio` HTML-parsing library to load a fixed HTML document and query it with the CSS class selector `.item`, which matches every element of that class; each matched element's text is extracted and the results are joined with commas.

## Run

    node main.js
