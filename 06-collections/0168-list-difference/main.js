const xs = [1, 2, 3, 4];
const remove = new Set([2, 4]);
const result = xs.filter((x) => !remove.has(x));
console.log(result.join(" "));
