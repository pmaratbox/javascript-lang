// fast-check — fc.assert (throws on fail) over fc.integer generators
import fc from 'fast-check';

fc.assert(
  fc.property(fc.integer(), fc.integer(), (a, b) => a + b === b + a),
  { numRuns: 100 }
);
console.log('passed');
