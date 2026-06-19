// lru-cache (strict LRU), ESM. Run: node main.js
import { LRUCache } from 'lru-cache';

const g = (c, k) => {
  const v = c.get(k);
  return v === undefined ? "miss" : String(v);
};

const c = new LRUCache({ max: 3 });
c.set("a", 1);
c.set("a", 2); // re-put same key updates the value
console.log(g(c, "a")); // 2
