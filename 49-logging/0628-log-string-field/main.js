// pino — structured logging. Capture records in-memory via a custom write
// stream (base:null, timestamp:false), then print a normalized line per record.
import pino from 'pino';

let captured = "";
const stream = { write: (s) => { captured += s; } };
const log = pino({ base: null, timestamp: false, level: "info" }, stream);

// Emit an INFO record with one structured string field.
log.info({ user: "alice" }, "login");

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
