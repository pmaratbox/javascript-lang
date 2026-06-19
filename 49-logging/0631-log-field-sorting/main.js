// 0631 — Deterministic field order with pino.
// Emit one INFO record with fields given OUT of order (zeta then alpha),
// capture the JSON line in-memory (base:null, timestamp:false), parse it,
// and print the normalized line with fields SORTED by key.
import pino from 'pino';

let captured = "";
const stream = { write: (s) => { captured += s; } };
const log = pino({ base: null, timestamp: false, level: "info" }, stream);

// Fields supplied in non-alphabetical order: zeta before alpha.
log.info({ zeta: 2, alpha: 1 }, "metric");

const LVL = { 10: "trace", 20: "debug", 30: "info", 40: "warn", 50: "error", 60: "fatal" };
const INTERNAL = new Set(["level", "msg", "time"]);

for (const line of captured.trim().split("\n").filter(Boolean)) {
  const d = JSON.parse(line);
  const fields = Object.keys(d)
    .filter((k) => !INTERNAL.has(k))
    .sort()
    .map((k) => `|${k}=${d[k]}`)
    .join("");
  console.log(`${LVL[d.level]}|${d.msg}${fields}`);
}
