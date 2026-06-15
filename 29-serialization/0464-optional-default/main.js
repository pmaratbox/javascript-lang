const json = '{"name":"alice"}';
const parsed = JSON.parse(json);

// Person(name:string, age:int with default 0).
// The age field is absent in the JSON, so fall back to the default via ??.
const person = { age: parsed.age ?? 0, name: parsed.name };

console.log(person.name, person.age);
