const mapping = (f) => (step) => (acc, x) => step(acc, f(x));
const filtering = (pred) => (step) => (acc, x) =>
  pred(x) ? step(acc, x) : acc;

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

const xform = compose(
  mapping((x) => x + 1),
  filtering((x) => x % 2 === 0)
);

const push = (acc, x) => (acc.push(x), acc);
const result = [1, 2, 3, 4].reduce(xform(push), []);

console.log(result.join(" "));
