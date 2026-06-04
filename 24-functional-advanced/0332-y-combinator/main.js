const Y = (f) => ((x) => f((v) => x(x)(v)))((x) => f((v) => x(x)(v)));

const fact = Y((self) => (n) => (n === 0 ? 1 : n * self(n - 1)));

console.log(fact(5));
