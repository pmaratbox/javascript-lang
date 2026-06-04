const zipWith = (f, xs, ys) => xs.map((x, i) => f(x, ys[i]));

const result = zipWith((a, b) => a + b, [1, 2, 3], [4, 5, 6]);

console.log(result.join(" "));
