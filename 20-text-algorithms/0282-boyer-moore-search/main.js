function boyerMoore(text, pattern) {
  const last = new Map();
  for (let i = 0; i < pattern.length; i++) last.set(pattern[i], i);
  const m = pattern.length;
  let s = 0;
  while (s <= text.length - m) {
    let j = m - 1;
    while (j >= 0 && pattern[j] === text[s + j]) j--;
    if (j < 0) return s;
    const badIdx = last.get(text[s + j]) ?? -1;
    s += Math.max(1, j - badIdx);
  }
  return -1;
}

console.log(boyerMoore("zzabc", "abc"));
