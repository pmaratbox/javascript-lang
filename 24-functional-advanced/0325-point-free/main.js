const compose = (f, g) => (x) => f(g(x));

const square = (x) => x * x;
const sum = (xs) => xs.reduce((a, b) => a + b, 0);
const mapSquare = (xs) => xs.map(square);

const sumOfSquares = compose(sum, mapSquare);

console.log(sumOfSquares([1, 2, 3]));
