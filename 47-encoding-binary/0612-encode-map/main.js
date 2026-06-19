import { encode } from '@msgpack/msgpack';

const value = { a: 1 };
const hex = Buffer.from(encode(value)).toString('hex');
console.log(hex);
