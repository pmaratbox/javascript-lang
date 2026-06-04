const foldl = (f, init, xs) => xs.reduce((acc, x) => f(acc, x), init);
const foldr = (f, init, xs) => xs.reduceRight((acc, x) => f(x, acc), init);

const sub = (a, b) => a - b;

const left = foldl(sub, 0, [1, 2, 3]);
const right = foldr(sub, 0, [1, 2, 3]);

console.log(`${left} ${right}`);
