# 0424 — Signal + Computed

Implement fine-grained reactivity: a writable signal and a derived computed that recomputes when its dependency changes. A signal is a closure with a `set` property whose subscribers (the computed's recompute callback) fire on every write.

## Run

    node main.js
