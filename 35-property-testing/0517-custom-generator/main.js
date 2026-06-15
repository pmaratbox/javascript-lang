// fast-check — build a CUSTOM generator with the `.map` combinator, then check a property over it.
import fc from 'fast-check';

// Custom generator: even integers, derived from arbitrary integers via map (n -> n*2).
const evenInteger = fc.integer().map(n => n * 2);

// Property: every generated value is even. fc.assert throws if any case fails.
fc.assert(
  fc.property(evenInteger, n => n % 2 === 0),
  { numRuns: 100 }
);

console.log('passed');
