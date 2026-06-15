# 0547 — Traffic light

A finite state machine built with [XState](https://stately.ai/docs) (`xstate` v5) models a traffic light cycling `red -> green -> yellow -> red`. We `createMachine` with an `initial` state and per-state `on` transitions, run it via `createActor`, fire the `NEXT` event twice, and read the resulting state from `getSnapshot().value` (lowercased). The final state comes from the machine, not a literal.

## Run

    node main.js
