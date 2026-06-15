import { Set } from 'immutable';

const original = Set([1, 2, 3]);
const updated = original.add(4);

console.log(updated.size);
console.log(original.size);
