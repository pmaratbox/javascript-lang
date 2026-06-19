# 0587 — Read an attribute

Uses the [cheerio](https://cheerio.js.org/) HTML library to parse a fixed document, then the tag selector `a` to locate the anchor element and `.attr("href")` to read its `href` attribute, printing `https://example.com`.

## Run

    node main.js
