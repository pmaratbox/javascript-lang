# 0549 — Invalid transition

Uses the **xstate** finite-state-machine library. When an event has no matching
transition from the current state, xstate treats it as *unhandled* and leaves the
machine in its current state — no error, no crash. Here the turnstile starts in
`locked` and receives `PUSH`, which is only defined for `unlocked`, so the state
stays `locked`.

## Run

    node main.js
