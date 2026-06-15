import { createMachine, createActor } from 'xstate';

// Door FSM. The `open` event is ONLY defined as a transition out of the
// `unlocked` state, so it is structurally rejected from `locked` (and `open`).
const door = createMachine({
  initial: 'locked',
  states: {
    locked: { on: { unlock: 'unlocked' } },
    unlocked: { on: { open: 'open' } },
    open: {},
  },
});

const actor = createActor(door).start();

// Fixed event sequence: unlock then open.
actor.send({ type: 'unlock' });
actor.send({ type: 'open' });

console.log(String(actor.getSnapshot().value).toLowerCase());
