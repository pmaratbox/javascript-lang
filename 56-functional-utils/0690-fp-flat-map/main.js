import _ from 'lodash';

// Map x -> [x, x*10] over [1,2,3] then flatten one level using lodash's _.flatMap, then comma-join.
console.log(_.flatMap([1, 2, 3], x => [x, x * 10]).join(","));
