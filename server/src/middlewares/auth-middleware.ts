import { NextFunction, Request, Response } from 'express'
import { User } from '../models/user'

export function loginRequired(req: Request, res: Response, next: NextFunction) {
  const user = req.user as User
  if (user) {
    next()
  } else {
    const status = 401
    res.status(status).json({
      message: 'Login required',
    })
  }
}
