const { TestScheduler } = require('rxjs/testing');
const { timer, merge } = require('rxjs');
const { map, switchMap } = require('rxjs/operators');

const out = [];
const s = new TestScheduler(() => {});

// outer emits 1 at virtual t=10, 2 at virtual t=20
const outer = merge(
  timer(10, s).pipe(map(() => 1)),
  timer(20, s).pipe(map(() => 2))
);

// inner(n): emits n at +5 and n*10 at +30
const inner = (n) =>
  merge(
    timer(5, s).pipe(map(() => n)),
    timer(30, s).pipe(map(() => n * 10))
  );

// switchMap cancels the previous inner when a new outer arrives:
// inner(1): 1@15, (10@40 cancelled at t=20); inner(2): 2@25, 20@50 -> 1, 2, 20
outer.pipe(switchMap((n) => inner(n))).subscribe((v) => out.push(v));
s.flush();

console.log(out.join('\n'));
