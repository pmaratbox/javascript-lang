const trailingZeros = (x) => {
  let c = 0;
  while ((x & 1) === 0) {
    x >>= 1;
    c++;
  }
  return c;
};

console.log(trailingZeros(8));
