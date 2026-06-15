# 0466 — Parse & access nested

Parse a JSON string and read a deeply nested value. Uses JavaScript's built-in `JSON` global (`JSON.parse`) to turn the text into a plain object tree, then reaches into the nested `user.name` field and the first element of the `user.roles` array.

## Run

    node main.js
