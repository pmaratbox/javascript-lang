// Build a plain object with keys in alphabetical insertion order.
// JSON.stringify follows insertion order, yielding alphabetical, compact JSON.
const person = { age: 30, name: 'alice' };

console.log(JSON.stringify(person));
