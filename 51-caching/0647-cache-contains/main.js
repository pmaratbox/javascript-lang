// JavaScript — lru-cache (strict LRU), ESM. Run: node main.js
import { LRUCache } from 'lru-cache';

const c = new LRUCache({ max: 3 });
c.set("a", 1);

// has() is a membership check that does NOT promote recency.
console.log(c.has("a"), c.has("x"));   // true false
