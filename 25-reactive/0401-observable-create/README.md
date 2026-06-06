# 0401 — Create an Observable

Build a push-based Observable from scratch that emits 1, 2, 3 to its observer and then completes. In JavaScript the producer is just a closure that synchronously calls the observer's `next` and `complete` callbacks.

## Run

    node main.js
