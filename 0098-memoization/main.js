const cache = new Map();

function fib(n) {
  if (n < 2) return n;
  if (cache.has(n)) return cache.get(n);
  const result = fib(n - 1) + fib(n - 2);
  cache.set(n, result);
  return result;
}

console.log(fib(10));
