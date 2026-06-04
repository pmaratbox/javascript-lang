const factCps = (n, k) =>
  n === 0 ? k(1) : factCps(n - 1, (r) => k(n * r));

console.log(factCps(5, (x) => x));
