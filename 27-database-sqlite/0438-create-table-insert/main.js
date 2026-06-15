import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec('create table users(id integer, name text)');

const insert = db.prepare('insert into users(id, name) values (?, ?)');
insert.run(1, 'alice');
insert.run(2, 'bob');
insert.run(3, 'carol');

for (const row of db.prepare('select name from users order by id').all()) {
  console.log(row.name);
}
