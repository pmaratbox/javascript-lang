# 0550 — Transition count

This lesson uses the xstate finite-state-machine library. The machine carries a `context` object holding a `count`, and every accepted transition runs an `assign` action that increments it. We start an actor with `createActor(machine).start()`, fire a fixed sequence of three valid events (`COIN`, `PUSH`, `COIN`), and read the per-transition counter back from `getSnapshot().context.count`. Because the count is driven by the actions on each transition, the result `3` comes from the machine rather than a hardcoded value.

## Run

    node main.js
