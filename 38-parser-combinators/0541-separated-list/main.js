import P from 'parsimmon';

const num = P.regexp(/[0-9]+/).map(Number);
const list = num.sepBy(P.string(','));

const result = list.parse('1,2,3').value;
const sum = result.reduce((a, b) => a + b, 0);
console.log(sum);
