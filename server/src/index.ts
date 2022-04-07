import express from 'express';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { createRouter } from './router';
import 'reflect-metadata';
import { entities } from './models';

dotenv.config({ path: __dirname+'/.env' });

const app = express();
const SERVER_PORT = process.env.PORT || 9999;

/*createConnection({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities,
  synchronize: true,
  logging: false
}).then(connection => {
  console.log('Connected to the database.');
}).catch(error => console.log(error));*/

app.use('/api', createRouter());

app.listen(SERVER_PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${SERVER_PORT}`);
});
