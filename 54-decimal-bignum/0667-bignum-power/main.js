// Big integer power using JavaScript's native BigInt.
// 2^100 computed exactly (no float rounding or overflow).
const result = 2n ** 100n;
console.log(result.toString());
