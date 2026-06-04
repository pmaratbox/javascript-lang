function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}

function addFractions(n1, d1, n2, d2) {
  let num = n1 * d2 + n2 * d1;
  let den = d1 * d2;
  const g = gcd(Math.abs(num), Math.abs(den));
  return [num / g, den / g];
}

const [n, d] = addFractions(1, 2, 1, 3);
console.log(`${n}/${d}`);
