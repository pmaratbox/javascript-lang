// fast-check — restrict generated inputs with a precondition via `.filter`, then assert the property.
import fc from 'fast-check';

// Generator with a precondition: keep only positive integers (n > 0).
const positiveInt = fc.integer().filter(n => n > 0);

// Property over the filtered inputs: n + 1 > n holds for every positive integer.
fc.assert(
  fc.property(positiveInt, n => n + 1 > n),
  { numRuns: 100 }
);

console.log('passed');
