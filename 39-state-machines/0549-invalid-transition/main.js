import { createMachine, createActor } from 'xstate';

// Turnstile FSM: locked --COIN--> unlocked --PUSH--> locked.
const m = createMachine({
  initial: 'locked',
  states: {
    locked: { on: { COIN: 'unlocked' } },
    unlocked: { on: { PUSH: 'locked' } },
  },
});

const a = createActor(m).start();

// 'PUSH' has NO transition from 'locked'. xstate ignores the unhandled
// event and the actor stays in its current state (no crash).
a.send({ type: 'PUSH' });

console.log(String(a.getSnapshot().value).toLowerCase());
