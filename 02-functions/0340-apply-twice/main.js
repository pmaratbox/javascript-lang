const applyTwice = (f, x) => f(f(x));
const inc = (n) => n + 1;

console.log(applyTwice(inc, 3));
