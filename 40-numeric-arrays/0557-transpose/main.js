import { transpose } from 'mathjs';

const m = [[1, 2, 3], [4, 5, 6]];
const t = transpose(m);
for (const row of t) console.log(row.map(x => String(Math.round(x))).join(' '));
