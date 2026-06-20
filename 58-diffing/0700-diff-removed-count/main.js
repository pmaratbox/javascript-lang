// Count removed lines using the jsdiff (diff) library.
import { diffLines } from 'diff';

const a = "apple\nbanana\ncherry\n";
const b = "apple\nblueberry\ncherry\ndate\n";

const parts = diffLines(a, b);

let removed = [];
for (const p of parts) {
  const lines = p.value.split("\n").filter(x => x.length);
  if (p.removed) removed.push(...lines);
}

console.log(removed.length);
