import { createMachine, createActor } from 'xstate';

// A multi-step approval workflow modeled as a finite state machine.
const m = createMachine({
  initial: 'idle',
  states: {
    idle: { on: { SUBMIT: 'pending' } },
    pending: { on: { APPROVE: 'approved', REJECT: 'rejected' } },
    approved: {},
    rejected: {},
  },
});

const a = createActor(m).start();

// Fire the fixed event sequence: submit then approve.
a.send({ type: 'SUBMIT' });
a.send({ type: 'APPROVE' });

console.log(String(a.getSnapshot().value).toLowerCase());
