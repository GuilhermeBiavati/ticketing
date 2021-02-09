import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@gbticketing/common';
import { body } from 'express-validator';
import mongoose from 'mongoose';
import { Ticket } from '../models/ticket';
import { Order } from '../models/order';

const router = express.Router();

router.post(
  'api/orders',
  requireAuth,
  [
    body('ticketId')
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage('Ticketid deve ser informado'),
  ],
  async (req: Request, res: Response) => {
    Ticket;

    Order;
    res.send({});
  }
);

export { router as createOrderRouter };
