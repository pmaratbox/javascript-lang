const frequentchar = "hello";
const counts = new Map();
for (const ch of frequentchar) {
  counts.set(ch, (counts.get(ch) ?? 0) + 1);
}
let best = frequentchar[0];
for (const [ch, n] of counts) {
  if (n > counts.get(best)) best = ch;
}
console.log(best);
