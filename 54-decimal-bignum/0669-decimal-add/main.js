import { BigNumber } from 'bignumber.js';

// 0.1 + 0.2 with an exact decimal type (not float).
const sum = new BigNumber("0.1").plus("0.2");
console.log(sum.toString());
