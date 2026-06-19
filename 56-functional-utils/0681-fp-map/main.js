import _ from 'lodash';

// Map the function x -> x*2 over [1,2,3] using lodash's _.map, then comma-join.
console.log(_.map([1, 2, 3], x => x * 2).join(","));
