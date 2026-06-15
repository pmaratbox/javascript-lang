import { DateTime } from 'luxon';

// Fixed instant (never the current time), parsed in UTC.
const dt = DateTime.fromISO('2026-06-15', { zone: 'utc' });

// Extract date components via the library's accessors.
console.log(dt.year);
console.log(dt.month);
console.log(dt.day);
