import { Map } from 'immutable';

// Persistent immutable map from immutable.js.
const original = Map({ a: 1 });

// .set returns a NEW map; `original` is unchanged.
const updated = original.set('b', 2);

const keys = (m) => m.keySeq().sort().join(' ');

console.log(keys(updated));
console.log(keys(original));
