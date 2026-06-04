# 0378 — Barrier Synchronization

Have 3 threads each arrive at a barrier before any proceeds, then print `all reached: 3`. In Node a SharedArrayBuffer plus Atomics.wait/notify across worker_threads forms the barrier.

## Run

    node main.js
