// Build a Person, serialize to JSON, then parse it back and print the name.
// Fields declared in alphabetical order so the canonical JSON is alphabetical.
const person = { age: 30, name: 'alice' };

const json = JSON.stringify(person); // {"age":30,"name":"alice"}
const back = JSON.parse(json);

console.log(back.name);
