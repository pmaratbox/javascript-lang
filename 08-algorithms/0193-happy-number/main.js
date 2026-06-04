function next(n) {
  let sum = 0;
  while (n > 0) {
    const d = n % 10;
    sum += d * d;
    n = Math.floor(n / 10);
  }
  return sum;
}
let n = 19;
const seen = new Set();
while (n !== 1 && !seen.has(n)) {
  seen.add(n);
  n = next(n);
}
console.log(n === 1 ? "yes" : "no");
