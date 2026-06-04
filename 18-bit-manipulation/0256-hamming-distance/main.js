const popcount = (x) => {
  let c = 0;
  while (x) {
    x &= x - 1;
    c++;
  }
  return c;
};

const hamming = (a, b) => popcount(a ^ b);

console.log(hamming(1, 4));
