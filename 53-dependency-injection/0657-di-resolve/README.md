# 0657 — Resolve a service

This lesson uses JavaScript's `awilix` DI container to register a `Greeter` service with `asClass` and then `resolve` it by name. The container constructs the instance for us, and calling its `greet()` method on the resolved object prints `hello`. The value is produced by resolving the service graph through the container, not hardcoded.

## Run

    node main.js
