import { v5 } from 'uuid';

// UUIDv5 (SHA-1, name-based) is DETERMINISTIC from (namespace, name).
// Generate the same (DNS, "example.com") pair twice — the results must match.
const a = v5("example.com", v5.DNS);
const b = v5("example.com", v5.DNS);

console.log(String(a === b));
