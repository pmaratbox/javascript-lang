// Nested object serialization with the built-in JSON library.
// Keys are declared in alphabetical insertion order so JSON.stringify
// emits compact, alphabetically-ordered JSON.
const address = { city: 'oslo', zip: 1000 };
const person = { address: address, name: 'alice' };
console.log(JSON.stringify(person));
