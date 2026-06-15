import P from 'parsimmon';

// Parse one-or-more digits into an integer, then MAP that value to value * 2.
const doubled = P.regexp(/[0-9]+/).map(Number).map((n) => n * 2);

console.log(doubled.parse('21').value);
