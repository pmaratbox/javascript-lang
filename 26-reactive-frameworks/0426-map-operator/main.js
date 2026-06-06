const { range } = require('rxjs');
const { map } = require('rxjs/operators');

const out = [];
range(1, 4)
  .pipe(map((x) => x * 2))
  .subscribe((v) => out.push(v));

console.log(out.join('\n'));
