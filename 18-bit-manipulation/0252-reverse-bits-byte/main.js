function reverseByte(x) {
  let r = 0;
  for (let i = 0; i < 8; i++) {
    r = (r << 1) | ((x >> i) & 1);
  }
  return r;
}

console.log(reverseByte(1));
