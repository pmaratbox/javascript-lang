const { of } = require('rxjs');

const out = [];
of(1, 2, 3).subscribe({
  next: (v) => out.push(v),
  complete: () => out.push('done'),
});

console.log(out.join('\n'));
