# 0492 — Custom rule

Validates input with the `joi` schema library using a `.custom()` validator — a custom rule that requires the `password` string to contain at least one digit. Validating `{ password: 'abcdef' }` with `{ abortEarly: false }` fails because the value has no digit; the program prints the sorted, lowercased failing field name(s) pulled from `error.details[].path`, never the library's message text. Here the output is the failing field name `password`.

## Run

    node main.js
