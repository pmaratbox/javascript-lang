import { createMachine, createActor } from 'xstate';

// Finite state machine: red -> green -> yellow -> red, driven by the NEXT event.
const trafficLight = createMachine({
  initial: 'red',
  states: {
    red: { on: { NEXT: 'green' } },
    green: { on: { NEXT: 'yellow' } },
    yellow: { on: { NEXT: 'red' } },
  },
});

const actor = createActor(trafficLight).start();

// Fixed event sequence: NEXT twice (red -> green -> yellow).
actor.send({ type: 'NEXT' });
actor.send({ type: 'NEXT' });

console.log(String(actor.getSnapshot().value).toLowerCase());
