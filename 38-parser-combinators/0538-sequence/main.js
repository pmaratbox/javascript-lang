import P from 'parsimmon';

const ab = P.seq(P.string('a'), P.string('b')).map(([x, y]) => x + y);
console.log(ab.parse('ab').value);
