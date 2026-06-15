// fast-check — fc.property with TWO arbitraries feeds both generated args to the predicate.
import fc from 'fast-check';

// Property over two generated integers a,b: max(a,b) >= a AND max(a,b) >= b.
fc.assert(
  fc.property(fc.integer(), fc.integer(), (a, b) => {
    const m = Math.max(a, b);
    return m >= a && m >= b;
  }),
  { numRuns: 100 }
);

console.log('passed');
