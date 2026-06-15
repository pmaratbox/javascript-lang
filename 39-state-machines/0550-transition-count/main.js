import { createMachine, createActor, assign } from 'xstate';

// A turnstile FSM whose context carries a transition counter.
// Each accepted event runs an `assign` action that increments `count`,
// so the final number is produced by the machine, never hardcoded.
const bump = assign({ count: ({ context }) => context.count + 1 });

const m = createMachine({
  initial: 'locked',
  context: { count: 0 },
  states: {
    locked: { on: { COIN: { target: 'unlocked', actions: bump } } },
    unlocked: { on: { PUSH: { target: 'locked', actions: bump } } },
  },
});

const a = createActor(m).start();

// Fire a FIXED sequence of 3 valid events.
a.send({ type: 'COIN' });
a.send({ type: 'PUSH' });
a.send({ type: 'COIN' });

console.log(String(a.getSnapshot().context.count).toLowerCase());
