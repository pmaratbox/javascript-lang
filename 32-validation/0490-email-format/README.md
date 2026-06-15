# 0490 — Email format

Validates an object with the `joi` library against a schema whose `email` field must be a valid email address, enforced by joi's built-in `Joi.string().email()` validator. Running `validate` with `{ abortEarly: false }` collects all failures; the input `{ email: 'not-an-email' }` is malformed, so validation fails. The program prints the sorted, lowercased failing field name(s) drawn from the validator's `error.details` — here `email` — or `ok` if validation passes.

## Run

    node main.js
