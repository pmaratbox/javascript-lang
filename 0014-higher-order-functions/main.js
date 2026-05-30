const inc = (x) => x + 1;
const double = (x) => x * 2;

function apply(f, x) {
    return f(x);
}

console.log(`inc 5 = ${apply(inc, 5)}`);
console.log(`double 5 = ${apply(double, 5)}`);
