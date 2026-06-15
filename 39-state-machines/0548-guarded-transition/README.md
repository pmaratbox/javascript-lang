# 0548 — Guarded transition

This lesson uses the xstate finite-state-machine library. We model a door whose `open` event is a *guarded transition*: it is defined only on the `unlocked` state, so the FSM structurally accepts it from `unlocked` but rejects it from any other state. Starting in `locked`, we fire the fixed sequence `unlock` then `open`; xstate walks `locked -> unlocked -> open`, and `getSnapshot().value` (lowercased) yields the final state.

## Run

    node main.js
