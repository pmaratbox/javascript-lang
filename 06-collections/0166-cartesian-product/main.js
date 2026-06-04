const nums = [1, 2];
const letters = ["a", "b"];
const pairs = [];
for (const n of nums) {
  for (const l of letters) {
    pairs.push(`${n}${l}`);
  }
}
console.log(pairs.join(" "));
