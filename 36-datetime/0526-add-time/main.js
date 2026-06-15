import { DateTime } from 'luxon';

// Fixed instant — never the current time.
const start = DateTime.fromISO('2026-06-15T10:00', { zone: 'utc' });

// Add 90 minutes via the library, then format as HH:mm.
const result = start.plus({ minutes: 90 });

console.log(result.toFormat('HH:mm'));
