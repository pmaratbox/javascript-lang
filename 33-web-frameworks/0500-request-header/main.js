import express from 'express';
import request from 'supertest';

const app = express();
app.get('/whoami', (req, res) => res.send(req.get('X-Name')));

const res = await request(app).get('/whoami').set('X-Name', 'alice');
console.log(res.text);
