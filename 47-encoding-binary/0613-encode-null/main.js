import { encode } from '@msgpack/msgpack';

const value = null;
const bytes = encode(value);
console.log(Buffer.from(bytes).toString('hex'));
