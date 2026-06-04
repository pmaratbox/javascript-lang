const expr = "1 + 2";
const tokens = [];
for (const ch of expr) {
  if (ch >= "0" && ch <= "9") tokens.push("NUM");
  else if (ch === "+") tokens.push("PLUS");
}
console.log(tokens.join(" "));
