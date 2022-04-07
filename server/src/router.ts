import { Router } from "express";

export const createRouter = (): Router => {
  const router = Router();

  router.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
  });

  return router;
};