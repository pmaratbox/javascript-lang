import crypto from 'node:crypto';

const digest = crypto.createHash('sha256').update('hello').digest('hex');
console.log(digest);
