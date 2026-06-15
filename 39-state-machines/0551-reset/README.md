# 0551 — Reset

This lesson uses the xstate finite-state-machine library. We define a process machine with `createMachine` whose `idle` state transitions to `running` on a `START` event, and whose `running` state transitions back to `idle` on a `RESET` event. After firing `START` then `RESET`, the actor's `getSnapshot().value` returns to the initial state, demonstrating how a reset event returns the machine to its starting state.

## Run

    node main.js
