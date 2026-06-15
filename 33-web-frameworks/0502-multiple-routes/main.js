import express from 'express';
import request from 'supertest';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('home'));
app.get('/about', (req, res) => res.send('about'));

const home = await request(app).get('/');
const about = await request(app).get('/about');
console.log(home.text);
console.log(about.text);
