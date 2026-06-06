# 0408 — Take Operator

Implement take(n) over an unbounded source of the natural numbers, emitting the first 3 then completing (and unsubscribing the source). The source's `subscribe` returns an unsubscribe closure that flips a `stopped` flag checked each loop iteration, so calling it mid-emission halts the infinite `while`.

## Run

    node main.js
