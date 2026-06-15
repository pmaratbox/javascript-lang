import { multiply } from 'mathjs';

const matrix = [[1, 2], [3, 4]];
const scalar = 3;
const result = multiply(scalar, matrix);
for (const row of result) console.log(row.map(x => String(Math.round(x))).join(' '));
