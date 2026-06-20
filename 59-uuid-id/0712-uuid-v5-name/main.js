// UUIDv5 (SHA-1, name-based) is deterministic from (namespace, name).
import { v5 } from 'uuid';

// Same DNS namespace as 0707, but a different name -> a different UUID.
console.log(v5("test.com", v5.DNS));
