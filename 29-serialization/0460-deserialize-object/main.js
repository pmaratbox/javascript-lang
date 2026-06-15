const json = '{"age":30,"name":"alice"}';

// Parse the JSON text into an object using the built-in JSON parser.
const person = JSON.parse(json);

console.log(`${person.name} ${person.age}`);
