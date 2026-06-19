import _ from 'lodash';

// Deduplicate [1,2,2,3,3,3] preserving order with lodash's _.uniq, then comma-join.
console.log(_.uniq([1, 2, 2, 3, 3, 3]).join(","));
