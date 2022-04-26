import * as express from 'express'
import { createConnection, getConnection } from 'typeorm'
import { createAuthRouter, createRouter } from './router'
import 'reflect-metadata'
import { entities } from './models'
import { migrations } from './migrations/index'
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'
import { passport } from './middlewares/passport'
import { TypeormStore } from 'connect-typeorm'
import { Session } from './models/session'
import { initDatabase } from './config/initdb'

export async function createApp() {
  await createConnection({
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
    migrations,
  })

  console.log('Connected to the database.')

  /*if (process.env.INIT_DB == 'true') {
    await initDatabase();
  }*/

  const app = express()

  const repository = getConnection().getRepository(Session)

  app.use(express.json())
  app.use(cookieParser())

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      name: 'sessionId',
      resave: false,
      rolling: true, // refresh cookie and store ttl on use
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60,
      },
      store: new TypeormStore({
        cleanupLimit: 2,
        limitSubquery: true,
        ttl: (store, sess, sessionID) => sess.cookie.originalMaxAge / 1000, // default 1 hour in seconds
      }).connect(repository),
    })
  )

  // Initialize passport and connect it to sessions so that it can add user property etc. to requests
  app.use(passport.initialize())
  app.use(passport.session())

  app.use('/api', createRouter())
  app.use('/auth', createAuthRouter())

  return app
}
