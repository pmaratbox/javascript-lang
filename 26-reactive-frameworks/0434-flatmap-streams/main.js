const { TestScheduler } = require('rxjs/testing');
const { timer, merge } = require('rxjs');
const { map, mergeMap } = require('rxjs/operators');

const out = [];
const s = new TestScheduler(() => {});

const outer = merge(
  timer(10, s).pipe(map(() => 1)),
  timer(20, s).pipe(map(() => 2))
);

outer
  .pipe(
    mergeMap((n) =>
      merge(
        timer(5, s).pipe(map(() => n)),
        timer(30, s).pipe(map(() => n * 10))
      )
    )
  )
  .subscribe((v) => out.push(v));

s.flush();

console.log(out.join('\n'));
