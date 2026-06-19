import _ from 'lodash';

// Take the first 3 elements of [1..10] with lodash's _.take, then comma-join.
console.log(_.take([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3).join(","));
