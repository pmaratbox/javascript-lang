import P from 'parsimmon';

// Alternative/choice: try literal 'cat', otherwise literal 'dog'.
const animal = P.string('cat').or(P.string('dog'));

console.log(animal.parse('dog').value);
