const xs = [2, 4, 6];
const allEven = xs.every((x) => x % 2 === 0);
const anyOdd = xs.some((x) => x % 2 !== 0);
console.log(`${allEven ? "yes" : "no"} ${anyOdd ? "yes" : "no"}`);
