// Roundtrip: parse a UUID string to bytes, then format back to canonical text.
import { parse, stringify } from 'uuid';

// parse() decodes the 16 bytes; stringify() re-renders canonical lowercase form.
console.log(stringify(parse("550E8400-E29B-41D4-A716-446655440000")));
