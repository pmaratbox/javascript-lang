function isEven(n) {
  if (n === 0) return true;
  return isOdd(n - 1);
}

function isOdd(n) {
  if (n === 0) return false;
  return isEven(n - 1);
}

for (const n of [4, 3]) {
  console.log(isEven(n) ? "even" : "odd");
}
