import _ from 'lodash';

// Group [1,2,3,4,5,6] by parity with lodash's _.groupBy, then print SORTED keys
// as `key:v1,v2,...` joined by ';'.
const g = _.groupBy([1, 2, 3, 4, 5, 6], x => (x % 2 === 0 ? "even" : "odd"));
console.log(Object.keys(g).sort().map(k => `${k}:${g[k].join(",")}`).join(";"));
