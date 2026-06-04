const xs = [1, 2, 3, 4, 1];
const result = [];
for (const x of xs) {
  if (x < 3) result.push(x);
  else break;
}
console.log(result.join(" "));
