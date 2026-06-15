import express from 'express';
import request from 'supertest';

const app = express();
app.get('/user', (req, res) => res.json({ name: 'alice' }));

const res = await request(app).get('/user');
console.log(JSON.stringify(res.body));
