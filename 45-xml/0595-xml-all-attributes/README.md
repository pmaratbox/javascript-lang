# 0595 — Read every book's id attribute

Uses the [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) XML library to parse a fixed catalog document, then extracts the `id` attribute of every `<book>` element and joins them with commas, printing `b1,b2`.

## Run

    node main.js
