import crypto from 'node:crypto';

const hasher = crypto.createHash('sha256');
hasher.update('foo');
hasher.update('bar');
console.log(hasher.digest('hex'));
