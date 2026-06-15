import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec('create table users(id integer, name text)');
db.exec('create table orders(user_id integer, item text)');

const insertUser = db.prepare('insert into users(id, name) values(?, ?)');
insertUser.run(1, 'alice');
insertUser.run(2, 'bob');

const insertOrder = db.prepare('insert into orders(user_id, item) values(?, ?)');
insertOrder.run(1, 'book');
insertOrder.run(2, 'pen');
insertOrder.run(1, 'lamp');

const rows = db
  .prepare(
    'select u.name, o.item from orders o join users u on u.id = o.user_id order by u.name, o.item',
  )
  .all();

for (const row of rows) {
  console.log(`${row.name} ${row.item}`);
}

db.close();
