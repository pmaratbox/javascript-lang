# 0109 — Run-Once Initialization

Ensure an initializer runs exactly once even when several threads race to trigger it, printing `init count: 1`. A memoized promise guards the init body so concurrent callers share one run, like a `Once` primitive.

## Run

    node main.js
