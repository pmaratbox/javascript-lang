import P from 'parsimmon';

const integer = P.regexp(/[0-9]+/).map(Number);
const padded = integer.trim(P.optWhitespace);

console.log(padded.parse('  42  ').value);
