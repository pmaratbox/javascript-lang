import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec('create table users(id integer, name text)');

const insert = db.prepare('insert into users(id, name) values (?, ?)');
insert.run(1, 'alice');
insert.run(2, 'bob');
insert.run(3, 'carol');

db.prepare("update users set name = ? where id = ?").run('robert', 2);
db.prepare('delete from users where id = ?').run(1);

const rows = db.prepare('select id, name from users order by id').all();
for (const row of rows) {
  console.log(`${row.id} ${row.name}`);
}
