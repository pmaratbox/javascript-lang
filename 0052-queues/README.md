# 0052 — Queues

Enqueue `1`, `2`, and `3` into a queue, then dequeue them all and print them in first-in-first-out order: `1 2 3`. JavaScript has no queue type; an array stands in, with `push` at the back and `shift()` at the front. `shift()` is O(n) because it reindexes, so a heavily used queue wants a real deque.

## Run

    node main.js
