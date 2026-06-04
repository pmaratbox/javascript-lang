const duplicatechars = "aabbcc";
const seen = new Set();
let result = "";
for (const ch of duplicatechars) {
  if (!seen.has(ch)) {
    seen.add(ch);
    result += ch;
  }
}
console.log(result);
