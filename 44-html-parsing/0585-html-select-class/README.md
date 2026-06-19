# 0585 — Select by class

This lesson uses the `cheerio` library to parse a fixed HTML document with `cheerio.load`, then queries it with the CSS class selector `.item`. Calling `.first().text()` on the matched set returns the text of the first matching `<li class="item">`, printing `apple`.

## Run

    node main.js
