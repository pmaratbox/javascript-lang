const scores = { a: 1, b: 2, c: 3 };
const total = Object.values(scores).reduce((acc, v) => acc + v, 0);
console.log(`sum: ${total}`);
