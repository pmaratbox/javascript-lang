import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec('create table products(id integer, sku text, price integer)');

const insert = db.prepare('insert into products(id, sku, price) values (?, ?, ?)');
insert.run(1, 'A', 100);
insert.run(2, 'B', 200);
insert.run(3, 'C', 300);

db.exec('create index idx_sku on products(sku)');

const row = db.prepare('select price from products where sku = ?').get('B');
console.log(row.price);
