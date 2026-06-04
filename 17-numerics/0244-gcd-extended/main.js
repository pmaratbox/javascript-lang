function extgcd(a, b) {
  if (b === 0) return [a, 1, 0];
  const [g, x, y] = extgcd(b, a % b);
  return [g, y, x - Math.floor(a / b) * y];
}

const [g, x, y] = extgcd(30, 12);
console.log(`${g} ${x} ${y}`);
