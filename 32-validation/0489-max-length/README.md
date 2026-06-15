# 0489 — Maximum length

Validates an object with the `joi` library against a schema requiring `code` to be a string with a maximum length of 5 characters. Running `validate` with `{ abortEarly: false }` collects all failures; the input `{ code: 'ABCDEFG' }` is too long, so validation fails and the program prints the sorted, lowercased failing field name(s) drawn from the validator's `error.details` — here, `code`. On success it would instead print `ok`.

## Run

    node main.js
