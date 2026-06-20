// UUIDv5 (SHA-1, name-based) is deterministic from (namespace, name).
import { v5 } from 'uuid';

// DNS namespace = 6ba7b810-9dad-11d1-80b4-00c04fd430c8 (v5.DNS).
console.log(v5("example.com", v5.DNS));
