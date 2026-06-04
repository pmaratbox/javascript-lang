const people = [
  [1, "alice"],
  [2, "bob"],
];
const byId = new Map(people.map(([id, name]) => [id, name]));
console.log(`id 2: ${byId.get(2)}`);
