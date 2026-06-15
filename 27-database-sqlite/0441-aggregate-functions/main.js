import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec('create table t(amount integer)');

const insert = db.prepare('insert into t(amount) values (?)');
for (const amount of [10, 20, 30, 40, 50]) {
  insert.run(amount);
}

const row = db.prepare(
  'select count(*) as c, sum(amount) as s, min(amount) as mn, max(amount) as mx from t'
).get();

console.log(row.c);
console.log(row.s);
console.log(row.mn);
console.log(row.mx);
