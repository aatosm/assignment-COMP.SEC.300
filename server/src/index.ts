import * as express from 'express';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { createRouter } from './router';
import 'reflect-metadata';
import { entities } from './models'
import { migrations } from './migrations/index'

dotenv.config({ path: __dirname+'/env/.env' });

createConnection({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  port: process.env.TYPEORM_PORT ? +process.env.TYPEORM_PORT : 5432,
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN == 'true',
  synchronize: process.env.TYPEORM_SYNCHRONIZE == 'true',
  logging: process.env.TYPEORM_LOGGING == 'false',
  entities,
  migrations
})
.then(async (connection) => {
  console.log('Connected to the database.');

  const app = express();
  const SERVER_PORT = process.env.SERVER_PORT || 9999;

  app.use(express.json());

  app.use('/api', createRouter());

  app.listen(SERVER_PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${SERVER_PORT}`);
  });
}).catch(error => console.log(error));
