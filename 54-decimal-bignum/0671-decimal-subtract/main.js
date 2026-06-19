// bignumber.js: exact decimal arithmetic (no binary float rounding).
import { BigNumber } from 'bignumber.js';

const a = new BigNumber("1.0");
const b = new BigNumber("0.1");
console.log(a.minus(b).toString());
