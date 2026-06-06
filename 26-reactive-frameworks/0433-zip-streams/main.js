const { of, zip } = require('rxjs');
const { map } = require('rxjs/operators');

const left = of(1, 2, 3);
const right = of(10, 20, 30);

const out = [];
zip(left, right)
  .pipe(map(([a, b]) => a + b))
  .subscribe({
    next: (v) => out.push(v),
  });

console.log(out.join('\n'));
