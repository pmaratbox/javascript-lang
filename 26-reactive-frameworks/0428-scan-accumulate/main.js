const { of } = require('rxjs');
const { scan } = require('rxjs/operators');

const out = [];

of(1, 2, 3, 4)
  .pipe(scan((acc, x) => acc + x, 0))
  .subscribe({
    next: (v) => out.push(v),
    complete: () => console.log(out.join('\n')),
  });
