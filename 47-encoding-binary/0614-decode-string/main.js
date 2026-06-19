import { decode } from '@msgpack/msgpack';

// Fixed MessagePack hex: a5 (fixstr len 5) + UTF-8 bytes of "hello".
const hex = 'a568656c6c6f';
const value = decode(Buffer.from(hex, 'hex'));
console.log(value);
