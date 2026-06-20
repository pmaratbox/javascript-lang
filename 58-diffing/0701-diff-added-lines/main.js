// Diff two fixed line-lists with the jsdiff library and print the added lines.
import { diffLines } from 'diff';

const a = "apple\nbanana\ncherry\n";
const b = "apple\nblueberry\ncherry\ndate\n";

const parts = diffLines(a, b);

const added = [];
for (const p of parts) {
  if (!p.added) continue;
  const lines = p.value.split("\n").filter(x => x.length);
  added.push(...lines);
}

console.log(added.join(","));
