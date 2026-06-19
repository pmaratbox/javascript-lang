import { LRUCache } from 'lru-cache';

const g = (c, k) => { const v = c.get(k); return v === undefined ? "miss" : String(v); };

const c = new LRUCache({ max: 3 });
console.log(g(c, "x")); // empty cache -> miss
