# 0589 — Extract table cells

Uses the [cheerio](https://cheerio.js.org/) HTML library to parse a fixed table document, then the tag selector `td` to match every cell, extracting each cell's text and joining them row-major with commas to print `r1c1,r1c2,r2c1,r2c2`.

## Run

    node main.js
