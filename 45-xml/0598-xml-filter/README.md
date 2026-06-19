# 0598 — Filter by attribute

Uses the [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) XML library to parse a fixed catalog document, then keeps only `<book>` elements whose `lang` attribute equals `en`, extracts their `<title>` text, and joins the results with commas — printing `Go`.

## Run

    node main.js
