# 0411 — Concat Streams

Implement concat: subscribe to the second source only after the first completes; concat [1,2] then [3,4]. In JavaScript an observer is a plain object with next/error/complete closures, and concat chains subscriptions in the first source's complete callback.

## Run

    node main.js
