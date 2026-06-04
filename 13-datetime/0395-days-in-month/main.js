const isLeap = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
const febDays = (y) => (isLeap(y) ? 29 : 28);
console.log(`${febDays(2000)} ${febDays(2001)}`);
