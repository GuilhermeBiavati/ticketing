import {
  NotAuthorizedError,
  NotFoundError,
  requireAuth,
} from '@gbticketing/common';
import express, { Request, Response } from 'express';
import { body, param } from 'express-validator';
import { Order } from '../models/order';
import mongoose from 'mongoose';
const router = express.Router();

router.get(
  '/api/orders/:orderId',
  requireAuth,
  [
    param('orderId').custom((input: string) =>
      mongoose.Types.ObjectId.isValid(input)
    ),
  ],
  async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.orderId);

    if (!order) {
      throw new NotFoundError();
    }

    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    res.send(order);
  }
);

export { router as showOrderRouter };
