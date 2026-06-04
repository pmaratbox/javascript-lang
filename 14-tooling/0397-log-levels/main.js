const LEVELS = { INFO: 1, WARN: 2, ERROR: 3 };
const threshold = LEVELS.WARN;

function log(level, msg) {
  if (LEVELS[level] >= threshold) console.log(`${level}: ${msg}`);
}

log("INFO", "i");
log("WARN", "w");
log("ERROR", "e");
