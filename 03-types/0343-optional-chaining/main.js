const present = { a: { b: { c: 5 } } };
const absent = { a: {} };

const x = present.a?.b?.c ?? 0;
const y = absent.a?.b?.c ?? 0;

console.log(`${x} ${y}`);
