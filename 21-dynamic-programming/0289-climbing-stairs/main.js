const n = 5;

let a = 1;
let b = 1;
for (let i = 2; i <= n; i++) {
  [a, b] = [b, a + b];
}

console.log(b);
