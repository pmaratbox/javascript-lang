import { createMachine, createActor } from 'xstate';

// Turnstile FSM: locked --COIN--> unlocked, unlocked --PUSH--> locked.
const machine = createMachine({
  initial: 'locked',
  states: {
    locked: { on: { COIN: 'unlocked' } },
    unlocked: { on: { PUSH: 'locked' } },
  },
});

const actor = createActor(machine).start();

// Fire the fixed event sequence.
actor.send({ type: 'COIN' });

// The resulting state comes from the machine, not a hardcoded value.
console.log(String(actor.getSnapshot().value).toLowerCase());
