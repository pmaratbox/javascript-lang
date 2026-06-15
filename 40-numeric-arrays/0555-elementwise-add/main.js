import { add } from 'mathjs';

const a = [1, 2, 3];
const b = [10, 20, 30];
const result = add(a, b);
console.log(result.map(x => String(Math.round(x))).join(' '));
