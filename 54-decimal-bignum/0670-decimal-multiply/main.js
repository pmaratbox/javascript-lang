// Exact decimal multiplication using bignumber.js.
// 1.1 * 1.1 computed exactly (no binary-float rounding).
import { BigNumber } from 'bignumber.js';

const product = new BigNumber('1.1').times('1.1');
console.log(product.toString());
