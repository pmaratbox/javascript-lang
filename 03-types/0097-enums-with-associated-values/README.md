# 0097 — Enums with Associated Values

Define a shape type carrying associated data — `Rect(2, 3)` and `Square(4)` — compute each area by matching on the variant, and print `6` and `16`. JavaScript has no sum types; a tagged object (a `type` field plus the variant's data) is the idiom, dispatched by checking the tag.

## Run

    node main.js
