import { List } from 'immutable';

const original = List([2, 3]);
const updated = original.unshift(1).push(4);

console.log(updated.join(' '));
