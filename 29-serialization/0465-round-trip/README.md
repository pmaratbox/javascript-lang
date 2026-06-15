# 0465 — Round trip

Serialize then deserialize the same object. Uses JavaScript's built-in `JSON` global: `JSON.stringify` turns a plain `Person` object into compact JSON, and `JSON.parse` reads it back into an object. Fields are declared in alphabetical order (`age`, `name`) so the canonical JSON stays compact and alphabetical, then we print the round-tripped name.

## Run

    node main.js
