import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec('create table t(n integer)');

const insert = db.prepare('insert into t(n) values (?)');

db.exec('begin');
insert.run(1);
insert.run(2);
db.exec('commit');

db.exec('begin');
insert.run(3);
db.exec('rollback');

for (const row of db.prepare('select n from t order by n').all()) {
  console.log(row.n);
}
