# 0660 — Bind interface to impl

This lesson uses JavaScript's `awilix` DI container to bind an abstraction to a concrete implementation. The `animal` token stands in for the `Animal` interface, and it is registered to the `Dog` class. The program resolves the service by its interface token rather than the concrete class, calls `sound()` on the resolved instance, and prints `woof`.

## Run

    node main.js
