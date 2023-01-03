import { Request, Response, NextFunction } from 'express';
import { momo } from './payment';

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  const x = await momo();
  console.log('createOrder', body, x);
};
