const inc = (x) => x + 1;
const twice = (x) => x * 2;
const compose = (f, g) => (x) => f(g(x));

console.log(compose(inc, twice)(3));
