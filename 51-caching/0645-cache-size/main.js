// JavaScript — lru-cache (strict LRU), ESM. Run: node main.js
import { LRUCache } from 'lru-cache';

const c = new LRUCache({ max: 5 });
c.set("a", 1);
c.set("b", 2);
console.log(c.size); // number of entries -> 2
