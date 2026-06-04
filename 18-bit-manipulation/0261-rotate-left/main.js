const rol8 = (x, n) => ((x << n) | (x >> (8 - n))) & 0xff;

console.log(`${rol8(1, 1)} ${rol8(128, 1)}`);
