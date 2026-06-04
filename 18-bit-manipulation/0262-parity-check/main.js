const popcount = (x) => {
  let c = 0;
  while (x) {
    x &= x - 1;
    c++;
  }
  return c;
};

const parity = (n) => popcount(n) & 1;

console.log(`${parity(7)} ${parity(5)}`);
