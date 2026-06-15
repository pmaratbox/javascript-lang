# 0468 — Scalar types

Serialize an object with bool, int, and string fields to compact JSON. Uses JavaScript's built-in `JSON` global (`JSON.stringify`), which emits keys in insertion order with no extra whitespace, lowercase booleans, and integers without decimal points. Declaring the fields alphabetically (`active`, `count`, `label`) makes the output canonical.

## Run

    node main.js
