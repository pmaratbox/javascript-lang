# 0021 — Mutability & References

Have a function increment a value in place — through a pointer, reference, or mutable holder — so the caller sees it change from `before: 1` to `after: 2`. JavaScript passes by value, but the value of an object *is* a reference, so the function and caller share one object; mutating `box.value` is visible to both. Primitive numbers are immutable and would not change, hence the wrapper object.

## Run

    node main.js
