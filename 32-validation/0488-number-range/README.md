# 0488 — Number range

Validates an object with the `joi` library against a schema requiring `age` to be a number in the range `0..120` (`Joi.number().min(0).max(120)`). Running `validate` with `{ abortEarly: false }` collects all failures; the input `{ name: 'alice', age: 200 }` exceeds the maximum, so validation fails. The program prints the sorted, lowercased failing field name(s) drawn from the validator's `error.details` (here `age`), or `ok` when validation passes.

## Run

    node main.js
