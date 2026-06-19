import pino from 'pino';

// Capture pino's structured records IN-MEMORY via a custom write stream.
let captured = "";
const stream = { write: (s) => { captured += s; } };

// base:null drops pid/hostname; timestamp:false removes the real time field.
const log = pino({ base: null, timestamp: false, level: "info" }, stream);

log.warn("low disk");

// Each captured line is one JSON record, e.g. {"level":40,"msg":"low disk"}.
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
