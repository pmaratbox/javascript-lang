import express from 'express';
import request from 'supertest';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('hello'));

// Request an undefined route; Express has no matching handler, so it
// returns a 404 automatically. We exercise the app IN-PROCESS with
// supertest (no fixed listening port) and print the real status code.
const res = await request(app).get('/missing');
console.log(res.statusCode);
