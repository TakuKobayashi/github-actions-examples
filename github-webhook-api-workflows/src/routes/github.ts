import { NextFunction, Request, Response } from 'express';

const express = require('express');
const githubRouter = express.Router();

githubRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'hello github' });
});

githubRouter.post('/webhook', async (req: Request, res: Response, next: NextFunction) => {
  const payload = JSON.parse(req.body);
  console.log(payload);
  res.send('OK');
});

export { githubRouter };