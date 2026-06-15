import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec('create table sales(category text, amount integer)');

const insert = db.prepare('insert into sales(category, amount) values (?, ?)');
insert.run('a', 10);
insert.run('b', 20);
insert.run('a', 30);
insert.run('b', 5);
insert.run('a', 2);

const rows = db
  .prepare('select category, sum(amount) as total from sales group by category order by category')
  .all();

for (const row of rows) {
  console.log(`${row.category} ${row.total}`);
}
