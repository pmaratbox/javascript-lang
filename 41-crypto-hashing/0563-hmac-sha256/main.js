import { createHmac } from 'node:crypto';

const digest = createHmac('sha256', 'key').update('hello').digest('hex');
console.log(digest);
