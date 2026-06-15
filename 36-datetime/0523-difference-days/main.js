import { DateTime } from 'luxon';

// Fixed dates — never the current time.
const start = DateTime.fromISO('2026-06-15', { zone: 'utc' });
const end = DateTime.fromISO('2026-07-15', { zone: 'utc' });

// Let luxon compute the difference in days.
const days = end.diff(start, 'days').days;

console.log(days);
