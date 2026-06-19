// lru-cache (strict LRU), ESM. Run: node main.js
import { LRUCache } from 'lru-cache';

const g = (c, k) => {
  const v = c.get(k);
  return v === undefined ? "miss" : String(v);
};

const c = new LRUCache({ max: 3 });
for (const [k, v] of [["a", 1], ["b", 2], ["c", 3]]) c.set(k, v);
c.get("a");   // promotes "a" to most-recently-used
c.set("d", 4); // "b" is now the LRU and is evicted
console.log(g(c, "a"), g(c, "b")); // 1 miss
