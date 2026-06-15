import { DateTime } from 'luxon';

// Parse a FIXED ISO date in UTC, then format it back to an ISO date string.
const dt = DateTime.fromISO('2026-06-15', { zone: 'utc' });
console.log(dt.toISODate());
