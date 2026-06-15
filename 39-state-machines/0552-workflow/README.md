# 0552 — Workflow

This lesson uses the xstate finite-state-machine library. We define a multi-step approval workflow with `createMachine`, declaring an `initial` state of `idle` and a `states` map whose `on` transitions wire each event to a target state (`idle --SUBMIT--> pending --APPROVE--> approved`). We start an actor with `createActor(m).start()`, fire the fixed event sequence `SUBMIT` then `APPROVE`, and read the resulting state from `a.getSnapshot().value`, lowercased.

## Run

    node main.js
