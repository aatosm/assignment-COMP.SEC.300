import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname+'/env/.env' });

const SERVER_PORT = process.env.SERVER_PORT || 9999;

import { createApp } from './app';
(async () => {
  try {
    const app = await createApp();
    app.listen(SERVER_PORT, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${SERVER_PORT}`);
    });
  } catch (error) {
    console.error('Create app failed', error);
  }
})();