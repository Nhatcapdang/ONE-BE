import { momoPayment } from '../config/axios';
import { apiMomo } from '../config/axios/apiMomo';
import { Request, Response, NextFunction } from 'express';

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body: IOrderPaymentMethodParams = req.body;
  try {
    const respons = await momoPayment<
      IOrderPaymentMethodRes,
      IOrderPaymentMethodParams
    >(apiMomo.orderPaymentMethod, body);
    return res.json(respons);
  } catch (error) {
    return res.status(500).json(error);
  } finally {
    next();
  }
};
