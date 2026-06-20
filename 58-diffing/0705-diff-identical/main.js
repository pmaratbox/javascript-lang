// JavaScript — diff (jsdiff), ESM. Run: node main.js
import { diffLines } from 'diff';

// Diff A against itself (A -> A): there are no differences.
const a = "apple\nbanana\ncherry\n";
const b = "apple\nbanana\ncherry\n";

const parts = diffLines(a, b);
let added = [];
let removed = [];
for (const p of parts) {
  const lines = p.value.split("\n").filter(x => x.length);
  if (p.added) added.push(...lines);
  else if (p.removed) removed.push(...lines);
}

console.log(`${added.length} ${removed.length}`);
