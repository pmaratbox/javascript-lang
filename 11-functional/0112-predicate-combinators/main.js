const and = (p, q) => (x) => p(x) && q(x);

const isEven = (x) => x % 2 === 0;
const isPositive = (x) => x > 0;

const test = and(isEven, isPositive);

const label = (b) => (b ? "yes" : "no");

console.log(`${label(test(4))} ${label(test(-4))}`);
