# 0546 — Toggle

A toggle is a two-state finite state machine where a single event flips
between the states. Here we use [XState](https://stately.ai/docs/xstate) v5:
`createMachine` declares `off` and `on`, each routing the `TOGGLE` event to
the other. `createActor(m).start()` runs the machine; sending `TOGGLE` three
times walks `off -> on -> off -> on`, and `getSnapshot().value` reports the
final state, which we lowercase before printing.

## Run

    node main.js
