// fast-check — fc.assert throws on a failing property; here it always holds, so we reach `passed`.
import fc from 'fast-check';

const sort = xs => [...xs].sort((a, b) => a - b);

// Property: sorting is idempotent — sort(sort(xs)) === sort(xs), over ~100 generated integer lists.
fc.assert(
  fc.property(fc.array(fc.integer()), xs => {
    const once = sort(xs);
    const twice = sort(once);
    return JSON.stringify(twice) === JSON.stringify(once);
  }),
  { numRuns: 100 }
);

console.log('passed');
