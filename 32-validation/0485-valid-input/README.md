# 0485 — Valid input

Validates an object with the `joi` library against a schema requiring `name` to be a string of at least 3 characters and `age` to be an integer in `0..120`. Running `validate` with `{ abortEarly: false }` collects all failures; the input `{ name: 'alice', age: 30 }` satisfies every constraint, so there is no error and the program prints `ok`. On failure it would instead print the sorted, lowercased failing field name(s) drawn from the validator's `error.details`.

## Run

    node main.js
