import { encode } from '@msgpack/msgpack';

const hex = v => Buffer.from(encode(v)).toString('hex');

console.log(hex([1, 2, 3]));
