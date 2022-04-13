import * as express from 'express';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { createRouter } from './router';
import 'reflect-metadata';

dotenv.config({ path: __dirname+'/.env' });

const app = express();
const SERVER_PORT = process.env.PORT || 9999;

createConnection()
  .then(async (connection) => {
    
    console.log('Connected to the database.');

    app.use('/api', createRouter());

    app.listen(SERVER_PORT, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${SERVER_PORT}`);
    });
  }).catch(error => console.log(error));

