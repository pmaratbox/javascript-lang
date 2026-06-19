// JavaScript — lru-cache (strict LRU), ESM. Run: node main.js
import { LRUCache } from 'lru-cache';

const c = new LRUCache({ max: 3 });
for (const [k, v] of [["a", 1], ["b", 2], ["c", 3], ["d", 4]]) c.set(k, v);
console.log(c.size); // size never exceeds capacity -> 3
