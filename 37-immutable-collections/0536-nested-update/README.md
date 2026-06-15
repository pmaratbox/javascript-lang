# 0536 — Nested update

Using Immutable.js, `Map.setIn(keyPath, value)` performs a deep update on a nested persistent `Map`, returning a brand-new map while the original stays unchanged. Here we update `user.age` from `30` to `31`; the new map reads `31` and the original still reads `30`.

## Run

    node main.js
