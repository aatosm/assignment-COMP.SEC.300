import { Request, Response, Router } from 'express'
import { User } from './models/user'
import {
  deleteReservation,
  getReservations,
  postReservation,
} from './controllers/reservation-controller'
import { getTimeSlots } from './controllers/timeslot-controller'
import { getUsers, createUser } from './controllers/user-controller'
import { asyncWrapper } from './middlewares/async-wrapper'
import { signInUser } from './middlewares/passport'
import { loginRequired } from './middlewares/auth-middleware'
import * as csurf from 'csurf'

const csrfProtection = csurf()

export const createRouter = (): Router => {
  const router = Router()

  router.get('/token', csrfProtection, (req: Request, res: Response) => {
    const response = { csrfToken: req.csrfToken() }
    res.status(200).json(response)
  })

  router.post('/users', asyncWrapper(createUser))

  // All routes below are login-protected
  router.use(loginRequired)

  router.get('/users', asyncWrapper(getUsers))

  router.get('/timeslots', asyncWrapper(getTimeSlots))

  router.get('/reservations/:id', asyncWrapper(getReservations))
  router.post('/reservations', csrfProtection, asyncWrapper(postReservation))
  router.delete('/reservations/:id', asyncWrapper(deleteReservation))

  return router
}

export const createAuthRouter = (): Router => {
  const router = Router()

  router.post('/login', signInUser)

  router.post('/logout', (req, res) => {
    req.logout()
    res.json({
      message: 'Successfully logged out',
    })
  })

  router.get('/login-state', (req, res) => {
    const user = req.user as User
    if (!user) {
      res.json({
        isAuthenticated: false,
      })
      return
    }
    res.json({
      isAuthenticated: true,
      id: user.id,
      email: user.email,
    })
  })

  return router
}
