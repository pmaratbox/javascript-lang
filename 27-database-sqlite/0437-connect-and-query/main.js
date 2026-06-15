import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');
console.log(db.prepare('select 42 as v').get().v);
