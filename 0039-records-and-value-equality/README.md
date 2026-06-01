# 0039 — Records & Value Equality

Create two points with the same fields, print one as `point: (1, 2)`, and compare them by value to print `equal: yes`. JavaScript objects compare by reference, so `===` on two distinct objects is `false` even with identical fields; equality must be checked field by field. `Object.freeze` makes them shallowly immutable but doesn't change comparison.

## Run

    node main.js
