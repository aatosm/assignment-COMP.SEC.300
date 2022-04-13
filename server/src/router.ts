import { Router } from "express";
import { getUsers, createUser, getUserById } from "./controllers/user-controller";
import { asyncWrapper } from "./middlewares/async-wrapper";

export const createRouter = (): Router => {
  const router = Router();

  router.get('/users', asyncWrapper(getUsers));
  router.post('/users', asyncWrapper(createUser));
  router.get('/users/:id', asyncWrapper(getUserById));

  return router;
};