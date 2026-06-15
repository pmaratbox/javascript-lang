// fast-check — detect a counterexample for a FALSE property without leaking the shrink report.
import fc from 'fast-check';

// False property: every non-negative integer is < 100. Densely false above 99.
// fc.check runs the same generation+shrinking as fc.assert but RETURNS a result object
// instead of throwing — so nothing (no falsifying-example/shrink report) is printed to stdout.
const result = fc.check(
  fc.property(fc.integer({ min: 0, max: 1000000 }), n => n < 100),
  { numRuns: 1000 }
);

// result.failed is true because the library generated and shrank a counterexample.
console.log(result.failed ? 'found' : 'no-ce');
