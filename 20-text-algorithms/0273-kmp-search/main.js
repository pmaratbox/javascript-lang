function prefixFunction(s) {
  const pi = new Array(s.length).fill(0);
  for (let i = 1; i < s.length; i++) {
    let j = pi[i - 1];
    while (j > 0 && s[i] !== s[j]) j = pi[j - 1];
    if (s[i] === s[j]) j++;
    pi[i] = j;
  }
  return pi;
}

function kmpSearch(text, pattern) {
  const pi = prefixFunction(pattern);
  const res = [];
  let j = 0;
  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) j = pi[j - 1];
    if (text[i] === pattern[j]) j++;
    if (j === pattern.length) {
      res.push(i - pattern.length + 1);
      j = pi[j - 1];
    }
  }
  return res;
}

console.log(kmpSearch("ababab", "ab").join(" "));
