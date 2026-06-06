# 0415 — SwitchMap

Implement switchMap: when a new outer value arrives, cancel the previous inner subscription before starting the new one. In JavaScript each inner subscription returns an unsubscribe closure that cancels its still-pending scheduled emissions.

## Run

    node main.js
