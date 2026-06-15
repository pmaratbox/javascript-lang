import { DateTime } from 'luxon';

// Fixed instant (never the current time): 2026-06-15T12:00:00Z.
const utc = DateTime.fromISO('2026-06-15T12:00:00Z', { zone: 'utc' });

// Convert to a FIXED +05:00 offset (no named tz / OS tzdata).
const shifted = utc.setZone('UTC+5');

// The library computes the local hour: 12 + 5 = 17.
console.log(shifted.hour);
