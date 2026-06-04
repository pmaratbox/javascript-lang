const n = 258;
const high = (n >> 8) & 0xff;
const low = n & 0xff;
const decoded = high * 256 + low;
console.log(`${high} ${low} ${decoded}`);
