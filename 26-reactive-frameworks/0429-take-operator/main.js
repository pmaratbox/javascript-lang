const { generate } = require('rxjs');
const { take } = require('rxjs/operators');

// Unbounded source of naturals 1, 2, 3, ...
const naturals = generate({
  initialState: 1,
  condition: () => true,
  iterate: (x) => x + 1,
});

const out = [];
naturals.pipe(take(3)).subscribe({
  next: (v) => out.push(String(v)),
  complete: () => out.push('completed'),
});

console.log(out.join('\n'));
