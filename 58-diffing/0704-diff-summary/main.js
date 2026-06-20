// JavaScript — diff (jsdiff), ESM. Run: node main.js
import { diffLines } from 'diff';

const a = "apple\nbanana\ncherry\n";
const b = "apple\nblueberry\ncherry\ndate\n";

const parts = diffLines(a, b);
let added = [], removed = [], equal = 0;
for (const p of parts) {
  const lines = p.value.split("\n").filter(x => x.length);
  if (p.added) added.push(...lines);
  else if (p.removed) removed.push(...lines);
  else equal += lines.length;
}

console.log(`${added.length} ${removed.length} ${equal}`);
