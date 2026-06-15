import { Set as ISet } from 'immutable';

const a = ISet([1, 2, 3]);
const b = ISet([3, 4, 5]);

// .union RETURNS A NEW set; the originals stay unchanged.
const u = a.union(b);

// Immutability check: `a` still has only its 3 elements after the union.
if (a.size !== 3) throw new Error('original set mutated!');

console.log(u.sort().join(' '));
