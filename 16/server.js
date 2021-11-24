import express from 'express';
import morgan from 'morgan';

import { CONFIG } from './constants.js';

const server = express();

server.use(morgan('tiny'));

server.get('/check', (req, res) => {
    res.json({ version: '0.0.1' });
})

server.get('/config', (req, res) => {
    res.json(CONFIG);
})

//Here, we'll implement our routes and middleware

export { server };