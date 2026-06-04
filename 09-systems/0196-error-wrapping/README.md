# 0196 — Error Wrapping

Wrap an inner error "inner" inside an outer context and print the combined message `outer: inner`. Modern JavaScript wraps errors via the `Error` constructor's `{ cause }` option.

## Run

    node main.js
