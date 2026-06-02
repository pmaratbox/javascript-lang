# 0036 — Inheritance & Overriding

Define a base `Animal` with a `speak` method, a `Dog` that overrides it, and call both, printing `animal: some sound` and `dog: Woof`. `class Dog extends Animal` inherits the prototype, and redefining `speak` overrides it; `super.speak()` calls the parent. Under the hood this is prototype-chain delegation rather than classical classes.

## Run

    node main.js
