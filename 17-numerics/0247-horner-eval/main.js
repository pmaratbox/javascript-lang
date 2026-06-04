function horner(coeffs, x) {
  return coeffs.reduce((acc, c) => acc * x + c, 0);
}

// 2x^2 + 3x + 1 at x = 2
console.log(horner([2, 3, 1], 2));
