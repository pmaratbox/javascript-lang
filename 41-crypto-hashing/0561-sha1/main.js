import crypto from 'node:crypto';

const digest = crypto.createHash('sha1').update('hello').digest('hex');
console.log(digest);
