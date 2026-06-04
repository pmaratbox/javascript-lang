function suffixArray(s) {
  return Array.from({ length: s.length }, (_, i) => i)
    .sort((a, b) => (s.slice(a) < s.slice(b) ? -1 : 1));
}

console.log(suffixArray("banana").join(" "));
