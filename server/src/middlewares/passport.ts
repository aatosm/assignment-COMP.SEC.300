import { Request, Response, NextFunction } from "express";
import passport = require("passport")
import {Strategy as LocalStrategy} from 'passport-local';
import { User } from "../models/user";
import { passwordsMatch } from "../services/user-service";
export { passport };

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email: string, password: string, done) => {
  const user = await User.findOne({ email: email })
    if (!user) {
      return done(null, false);
    }
    if (!await passwordsMatch(password, user.password)) {
      return done(null, false);
    }
    return done(null, user)
}));

export async function signInUser(req: Request, res: Response, next: NextFunction) {
  const body = req.body;
  // validate username and pw

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      next(err);
      return;
    }
    req.logIn(user, (error) => {
      if (error) {
        next(error);
        return;
      }
      const response = {
        message: 'Login successful'
      };
      res.status(200).json(response);
    });
  })(req, res, next);
}

passport.serializeUser((user: User, cb) => {
  cb(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  const user = await User.findOne({ id });
  if (!user) {
    done(null, false);
    return;
  }
  done(null, user);
});