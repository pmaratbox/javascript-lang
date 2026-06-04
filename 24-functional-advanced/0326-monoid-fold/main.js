const fold = (xs, empty, combine) => xs.reduce(combine, empty);

const str = fold(["a", "b", "c"], "", (a, b) => a + b);
const num = fold([1, 2, 3], 0, (a, b) => a + b);

console.log(`${str} ${num}`);
