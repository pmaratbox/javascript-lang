import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');
db.exec('create table t(n integer)');

const insert = db.prepare('insert into t(n) values (?)');
db.exec('begin');
for (let i = 1; i <= 1000; i++) {
  insert.run(i);
}
db.exec('commit');

console.log(db.prepare('select count(*) as c from t').get().c);
