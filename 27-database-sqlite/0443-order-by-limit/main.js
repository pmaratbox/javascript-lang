import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');
db.exec('create table scores(value integer)');

const insert = db.prepare('insert into scores(value) values (?)');
for (const v of [50, 90, 70, 30, 100, 20]) {
  insert.run(v);
}

const select = db.prepare('select value from scores order by value desc limit 3');
for (const row of select.all()) {
  console.log(row.value);
}
