const { TestScheduler } = require('rxjs/testing');
const { timer, merge } = require('rxjs');
const { map, debounce } = require('rxjs/operators');

const out = [];
const s = new TestScheduler(() => {});

// Source emits 'a' at t=10, 'b' at t=20, 'c' at t=100.
const source = merge(
  timer(10, s).pipe(map(() => 'a')),
  timer(20, s).pipe(map(() => 'b')),
  timer(100, s).pipe(map(() => 'c')),
);

// debounce: emit a value only after a quiet gap of 30 virtual ms.
// 'a' is superseded by 'b' (gap 10 < 30) -> dropped.
// 'b' stays quiet for 30 (next at t=100) -> emitted.
// 'c' needs a quiet window; completion is late (t>130) so 'c' is emitted too.
source.pipe(debounce(() => timer(30, s))).subscribe((v) => out.push(v));

s.flush();

console.log(out.join('\n'));
