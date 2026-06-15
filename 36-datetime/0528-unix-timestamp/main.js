import { DateTime } from 'luxon';

// Parse a FIXED UTC instant (never the current time) and ask Luxon for its
// Unix timestamp in epoch SECONDS via toSeconds().
const instant = DateTime.fromISO('2026-06-15T00:00:00Z', { zone: 'utc' });
const unixSeconds = instant.toSeconds();

console.log(unixSeconds);
