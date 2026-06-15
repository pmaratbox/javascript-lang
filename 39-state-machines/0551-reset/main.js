import { createMachine, createActor } from 'xstate';

const m = createMachine({
  initial: 'idle',
  states: {
    idle: { on: { START: 'running' } },
    running: { on: { RESET: 'idle' } },
  },
});

const a = createActor(m).start();
a.send({ type: 'START' });
a.send({ type: 'RESET' });

console.log(String(a.getSnapshot().value).toLowerCase());
