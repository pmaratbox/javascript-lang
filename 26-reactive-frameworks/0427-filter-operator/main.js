const { range } = require('rxjs');
const { filter } = require('rxjs/operators');

const out = [];
range(1, 6)
  .pipe(filter((x) => x % 2 === 0))
  .subscribe((v) => out.push(v));

console.log(out.join('\n'));
