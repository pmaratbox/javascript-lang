# 0464 — Optional field default

Parse JSON that is missing a field and supply a default. Uses JavaScript's built-in `JSON.parse` to turn `{"name":"alice"}` into an object, then the nullish coalescing operator (`??`) to default the absent `age` field to `0` when building the `Person` value.

## Run

    node main.js
