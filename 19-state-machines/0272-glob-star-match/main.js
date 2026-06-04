function globMatch(pattern, text) {
  let p = 0;
  let t = 0;
  let star = -1;
  let mark = 0;
  while (t < text.length) {
    if (p < pattern.length && (pattern[p] === text[t] || pattern[p] === "?")) {
      p++;
      t++;
    } else if (p < pattern.length && pattern[p] === "*") {
      star = p;
      mark = t;
      p++;
    } else if (star !== -1) {
      p = star + 1;
      mark++;
      t = mark;
    } else {
      return "no";
    }
  }
  while (p < pattern.length && pattern[p] === "*") p++;
  return p === pattern.length ? "yes" : "no";
}

console.log(`${globMatch("a*b", "aaab")} ${globMatch("a*b", "aac")}`);
