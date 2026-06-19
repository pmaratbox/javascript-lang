import _ from 'lodash';

// Flatten [[1,2],[3,4],[5,6]] one level with lodash's _.flatten, then comma-join.
console.log(_.flatten([[1, 2], [3, 4], [5, 6]]).join(","));
