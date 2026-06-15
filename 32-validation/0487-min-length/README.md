# 0487 — Minimum length

Validates input with the `joi` schema library, enforcing a `.min(3)` minimum-length constraint on the `name` string. Validating `{ name: 'al', age: 30 }` with `{ abortEarly: false }` fails because `'al'` is shorter than three characters; the program prints the sorted, lowercased failing field name(s) pulled from `error.details[].path`, never the library's message text.

## Run

    node main.js
