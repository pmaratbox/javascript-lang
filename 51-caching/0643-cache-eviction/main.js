import { LRUCache } from 'lru-cache';

const g = (c, k) => {
  const v = c.get(k);
  return v === undefined ? "miss" : String(v);
};

const c = new LRUCache({ max: 3 });
for (const [k, v] of [["a", 1], ["b", 2], ["c", 3], ["d", 4]]) c.set(k, v);

// capacity 3: putting d=4 evicts the least-recently-used key a
console.log(g(c, "a"), g(c, "d"));
