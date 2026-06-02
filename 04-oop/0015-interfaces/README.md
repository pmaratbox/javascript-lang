# 0015 — Interfaces

Define a `Shape` interface with `name()` and `area()` methods, implement it for a rectangle and a square, then loop over a collection of shapes and print each one's area. JavaScript has no `interface` keyword — polymorphism is purely *duck typing*: any object that responds to `name()` and `area()` fits, so `Rectangle` and `Square` need not share a base class or declare a contract. The loop calls `s.area()` on each element, and the method resolves dynamically against the object's own prototype.

## Run

    node main.js
