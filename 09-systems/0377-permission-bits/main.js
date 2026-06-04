const bits = 0b101;
const chars = ["r", "w", "x"];

const result = chars
  .map((c, i) => (bits & (1 << (2 - i)) ? c : "-"))
  .join("");

console.log(result);
