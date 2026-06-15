import { multiply } from 'mathjs';

const a = [[1, 2], [3, 4]];
const b = [[5, 6], [7, 8]];
const c = multiply(a, b);
for (const row of c) console.log(row.map((x) => String(Math.round(x))).join(' '));
