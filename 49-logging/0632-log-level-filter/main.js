// pino — set min level to WARN; the INFO record is dropped, only WARN is captured.
import pino from 'pino';

let captured = "";
const stream = { write: (s) => { captured += s; } };
const log = pino({ base: null, timestamp: false, level: "warn" }, stream);

log.info("hidden");  // below the minimum level -> suppressed
log.warn("visible");

// Each captured JSON line looks like: {"level":40,"msg":"visible"}
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
