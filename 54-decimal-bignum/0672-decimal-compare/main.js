// bignumber.js: exact base-10 decimals, free of binary float rounding.
// In float math 0.1 + 0.2 !== 0.3; with exact decimals it does.
import { BigNumber } from 'bignumber.js';

const sum = new BigNumber("0.1").plus("0.2");
console.log(sum.isEqualTo("0.3").toString());
