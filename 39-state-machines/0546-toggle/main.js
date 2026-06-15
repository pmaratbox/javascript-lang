import { createMachine, createActor } from 'xstate';

const m = createMachine({
  initial: 'off',
  states: {
    off: { on: { TOGGLE: 'on' } },
    on: { on: { TOGGLE: 'off' } },
  },
});

const a = createActor(m).start();
a.send({ type: 'TOGGLE' }); // off -> on
a.send({ type: 'TOGGLE' }); // on -> off
a.send({ type: 'TOGGLE' }); // off -> on
console.log(String(a.getSnapshot().value).toLowerCase());
