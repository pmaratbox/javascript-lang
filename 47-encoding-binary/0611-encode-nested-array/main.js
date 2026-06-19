import { encode } from '@msgpack/msgpack';

const value = [[1, 2], [3, 4]];
const hex = Buffer.from(encode(value)).toString('hex');
console.log(hex);
