const { TestScheduler } = require('rxjs/testing');
const { timer, merge } = require('rxjs');
const { map } = require('rxjs/operators');

const out = [];
const s = new TestScheduler(() => {});

const a = merge(
  timer(10, s).pipe(map(() => 1)),
  timer(30, s).pipe(map(() => 3)),
  timer(50, s).pipe(map(() => 5))
);
const b = merge(
  timer(20, s).pipe(map(() => 2)),
  timer(40, s).pipe(map(() => 4)),
  timer(60, s).pipe(map(() => 6))
);

merge(a, b).subscribe(v => out.push(v));
s.flush();

console.log(out.join('\n'));
