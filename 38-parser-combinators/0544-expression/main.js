import P from 'parsimmon';

const num = P.regexp(/[0-9]+/).map(Number);
const expr = num.sepBy(P.string('+')).map((nums) => nums.reduce((a, b) => a + b, 0));

console.log(expr.parse('10+20+30').value);
