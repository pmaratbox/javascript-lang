import _ from 'lodash';

const pairs = _.zip([1, 2, 3], ["a", "b", "c"]);
console.log(pairs.map(([n, s]) => `${n}${s}`).join(","));
