import _ from 'lodash';

// Filter even numbers from [1,2,3,4,5,6] using lodash's _.filter.
const evens = _.filter([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0);
console.log(evens.join(","));
