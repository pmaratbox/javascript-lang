// fast-check — fc.assert throws on failure, so completing means the property held
import fc from 'fast-check';

fc.assert(
  fc.property(fc.string(), s => (s + s).length === 2 * s.length),
  { numRuns: 100 }
);
console.log('passed');
