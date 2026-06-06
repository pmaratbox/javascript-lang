const { of, concat } = require('rxjs');

const first = of(1, 2);
const second = of(3, 4);

const out = [];
concat(first, second).subscribe({
  next: (v) => out.push(v),
});

console.log(out.join('\n'));
