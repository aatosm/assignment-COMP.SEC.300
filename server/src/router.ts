import { Router } from "express";
import { getUsers, createUser, getUserById } from "./controllers/user-controller";
import { asyncWrapper } from "./middlewares/async-wrapper";
import { signInUser } from "./middlewares/passport";

export const createRouter = (): Router => {
  const router = Router();

  router.get('/users', asyncWrapper(getUsers));
  router.post('/users', asyncWrapper(createUser));
  router.get('/users/:id', asyncWrapper(getUserById));

  return router;
};

export const createAuthRouter = (): Router => {
  const router = Router();

  router.post('/login', signInUser);

  return router;
};