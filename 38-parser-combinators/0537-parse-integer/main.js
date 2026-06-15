import P from 'parsimmon';

// Build an integer parser from combinators: P.regexp matches one-or-more
// digits, and .map transforms the matched text into a JS number.
const integer = P.regexp(/[0-9]+/).map(Number);

const result = integer.parse('42').value;
console.log(result);
