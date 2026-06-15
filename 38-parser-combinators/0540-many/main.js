import P from 'parsimmon';

// many: repeat a parser zero or more times, collecting results into an array.
const manyA = P.string('a').many();

const result = manyA.parse('aaaa').value;
console.log(result.length);
