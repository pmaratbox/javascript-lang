# 0545 — Basic transition

This lesson uses the xstate finite-state-machine library. We define a turnstile FSM with `createMachine` — two states (`locked`, `unlocked`) and transitions declared via `on` (`COIN` moves `locked` to `unlocked`, `PUSH` moves `unlocked` back to `locked`). We start an actor with `createActor(machine).start()`, fire the fixed event `{ type: 'COIN' }` with `send`, then read the resulting state from `getSnapshot().value` and lowercase it, yielding `unlocked`.

## Run

    node main.js
