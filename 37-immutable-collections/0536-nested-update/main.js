import { Map as IMap } from 'immutable';

// Persistent nested map: { user: { age: 30 } }
const original = IMap({ user: IMap({ age: 30 }) });

// setIn returns a NEW map with the nested value updated; original is untouched.
const updated = original.setIn(['user', 'age'], 31);

console.log(updated.getIn(['user', 'age']));
console.log(original.getIn(['user', 'age']));
