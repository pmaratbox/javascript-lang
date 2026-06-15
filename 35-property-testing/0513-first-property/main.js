// fast-check — fc.assert throws on a failing property; here it always holds, so we reach `passed`.
import fc from 'fast-check';

// Property: reversing a list twice yields the original, over ~100 generated integer lists.
fc.assert(
  fc.property(fc.array(fc.integer()), xs => {
    const r = [...xs].reverse().reverse();
    return JSON.stringify(r) === JSON.stringify(xs);
  }),
  { numRuns: 100 }
);

console.log('passed');
