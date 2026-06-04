const flatMap = (xs, f) => xs.flatMap(f);

const result = flatMap([1, 2, 3], (x) => [x, x * 10]);

console.log(result.join(" "));
