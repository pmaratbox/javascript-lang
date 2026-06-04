function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}

function reduce(num, den) {
  const g = gcd(Math.abs(num), Math.abs(den));
  return [num / g, den / g];
}

const [n, d] = reduce(6, 8);
console.log(`${n}/${d}`);
