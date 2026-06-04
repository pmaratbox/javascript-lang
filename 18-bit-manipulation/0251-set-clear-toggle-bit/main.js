const set = (x) => x | (1 << 1);
const clear = (x) => x & ~(1 << 1);
const toggle = (x) => x ^ (1 << 1);

console.log(`${set(0)} ${clear(2)} ${toggle(0)}`);
