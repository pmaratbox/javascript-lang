// JavaScript — diff (jsdiff), ESM. Run: node main.js
import { diffLines } from 'diff';

const a = "apple\nbanana\ncherry\n";
const b = "apple\nblueberry\ncherry\ndate\n";

const parts = diffLines(a, b);
let added = [];
for (const p of parts) {
  const lines = p.value.split("\n").filter(x => x.length);
  if (p.added) added.push(...lines);
}

console.log(added.length);
