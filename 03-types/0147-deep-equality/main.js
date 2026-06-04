const a = { left: [1, 2], right: { x: 3 } };
const b = { left: [1, 2], right: { x: 3 } };

const equal = JSON.stringify(a) === JSON.stringify(b);

console.log(`equal: ${equal ? "yes" : "no"}`);
