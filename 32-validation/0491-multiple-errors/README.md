# 0491 — Multiple errors

Validates an object with the `joi` library against a schema requiring `name` to be a string of at least 3 characters and `age` to be an integer in `0..120`. The input `{ name: 'al', age: 200 }` violates both constraints. Calling `validate` with `{ abortEarly: false }` makes joi report every failure instead of stopping at the first; the program extracts each failing field from `error.details[].path[0]`, lowercases, dedupes, and sorts them. The output is the sorted, lowercased failing field name(s), one per line — never the library-specific message text.

## Run

    node main.js
