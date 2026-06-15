import { DateTime } from 'luxon';

// Fixed date (never the current time). Add 10 days via Luxon's duration arithmetic.
const start = DateTime.fromISO('2026-06-15', { zone: 'utc' });
const result = start.plus({ days: 10 });
console.log(result.toISODate());
