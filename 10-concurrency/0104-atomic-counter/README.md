# 0104 — Atomic Counter

Increment a shared atomic counter from multiple threads 1000 times total without a lock, printing `1000`. Ten real `worker_threads` share a `SharedArrayBuffer` and use `Atomics.add` for lock-free fetch-add on the shared integer.

## Run

    node main.js
