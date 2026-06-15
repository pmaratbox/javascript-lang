import { DateTime } from 'luxon';

// Fixed date — never the current time.
const date = DateTime.fromISO('2026-06-15', { zone: 'utc' });

// luxon's .weekday is already ISO (Monday = 1 .. Sunday = 7).
console.log(date.weekday);
