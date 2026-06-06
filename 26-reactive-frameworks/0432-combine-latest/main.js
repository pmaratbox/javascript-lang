const { TestScheduler } = require('rxjs/testing');
const { timer, merge, combineLatest } = require('rxjs');
const { map } = require('rxjs/operators');

const out = [];
const s = new TestScheduler(() => {});

// Source A emits 1 at t=10 and 2 at t=30.
const a = merge(
  timer(10, s).pipe(map(() => 1)),
  timer(30, s).pipe(map(() => 2)),
);

// Source B emits 10 at t=20.
const b = timer(20, s).pipe(map(() => 10));

// Emit the latest pair whenever either source emits (once both have a value):
// (1, 10) at t=20, (2, 10) at t=30.
combineLatest([a, b]).subscribe(([x, y]) => out.push(`(${x}, ${y})`));

s.flush();

console.log(out.join('\n'));
