import { List } from 'immutable';

// Persistent immutable list. Every transform returns a NEW List;
// the original is never mutated.
const original = List([1, 2, 3, 4, 5]);

// filter -> new List, then map -> new List.
const result = original
  .filter((n) => n % 2 === 0)
  .map((n) => n * 10);

console.log(result.join(' '));
