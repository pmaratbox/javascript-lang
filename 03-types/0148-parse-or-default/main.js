function parseOrDefault(s, fallback) {
  const n = Number.parseInt(s, 10);
  return Number.isNaN(n) ? fallback : n;
}

const ok = parseOrDefault("42", 0);
const bad = parseOrDefault("x", 0);

console.log(`${ok} ${bad}`);
