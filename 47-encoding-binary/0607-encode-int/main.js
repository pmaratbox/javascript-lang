import { encode } from '@msgpack/msgpack';

const value = 42;
const bytes = encode(value);
console.log(Buffer.from(bytes).toString('hex'));
