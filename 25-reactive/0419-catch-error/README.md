# 0419 — Catch Error

Implement catchError that, on an error from the source, switches to a fallback stream. In JavaScript the observer is a plain object of `next`/`error`/`complete` closures, and `catchError` simply re-subscribes the fallback to the same observer on error.

## Run

    node main.js
