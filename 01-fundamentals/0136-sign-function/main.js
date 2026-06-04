const sign = (x) => (x > 0 ? 1 : x < 0 ? -1 : 0);

console.log(`${sign(-5)} ${sign(0)} ${sign(5)}`);
