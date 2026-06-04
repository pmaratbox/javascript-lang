const pipe = (...fns) => (x) => fns.reduce((acc, f) => f(acc), x);

const inc = (x) => x + 1;
const double = (x) => x * 2;
const neg = (x) => -x;

console.log(pipe(inc, double, neg)(3));
