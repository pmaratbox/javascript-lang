// JavaScript — diff (jsdiff), ESM. Run: node main.js
import { diffLines } from 'diff';

const a = "";
const b = "alpha\nbeta\n";

const parts = diffLines(a, b);
let added = [];
for (const p of parts) {
  const lines = p.value.split("\n").filter(x => x.length);
  if (p.added) added.push(...lines);
}

console.log(added.length);
