let n = 6;
let steps = 0;
while (n !== 1) {
  n = n % 2 === 0 ? n / 2 : 3 * n + 1;
  steps++;
}
console.log(steps);
