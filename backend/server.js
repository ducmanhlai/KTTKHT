import express from 'express';
import run from './services';
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

run(app);