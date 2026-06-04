# 0380 — Compare-And-Swap Loop

Increment a shared value to 100 using a CAS retry loop from multiple threads, printing `100`. Node's Atomics.compareExchange over a SharedArrayBuffer drives the retry loop across worker_threads.

## Run

    node main.js
