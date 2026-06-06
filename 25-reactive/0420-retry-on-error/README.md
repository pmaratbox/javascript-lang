# 0420 — Retry On Error

Implement retry(n) that resubscribes to the source on error up to n times; the source succeeds on the 3rd subscription. In JavaScript a recursive closure re-invokes `source.subscribe` while a counter tracks the remaining retries.

## Run

    node main.js
