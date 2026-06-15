# 0486 — Required field

Uses the Joi validation library with a `Joi.object` schema where both `name` and `age` are marked `.required()`. The input supplies `name` but omits `age`, so Joi's `validate(input, { abortEarly: false })` reports the missing required field. The output is the failing field name(s), extracted from `error.details[].path`, lowercased, deduped and sorted.

## Run

    node main.js
