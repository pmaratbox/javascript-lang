// Build plain objects with keys in alphabetical insertion order, then
// serialize the whole array with the built-in JSON library.
const people = [
  { age: 30, name: 'alice' },
  { age: 25, name: 'bob' },
];

console.log(JSON.stringify(people));
