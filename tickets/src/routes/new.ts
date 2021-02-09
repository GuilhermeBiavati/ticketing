import express, { Response, Request } from 'express';
import { requireAuth, validateRequest } from '@gbticketing/common';
import { body } from 'express-validator';
import { Ticket } from '../models/ticket';
import { TicketCreatedPublisher } from '../events/publishers/ticket-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();
// @ts-ignore
router.post(
  '/api/tickets',
  // @ts-ignore
  requireAuth,
  [
    body('title').not().isEmpty().withMessage('Título é requirido'),
    body('price')
      .isFloat({ gt: 0 })
      .withMessage('Preço de ser maior que R$ 0,00'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, price } = req.body;

    const ticket = Ticket.build({ title, price, userId: req.currentUser!.id });

    await ticket.save();

    await new TicketCreatedPublisher(natsWrapper.client).publish({
      id: ticket.id,
      title: ticket.title,
      price: ticket.price,
      userId: ticket.userId,
    });

    res.status(201).send(ticket);
  }
);

export { router as createTicketRouter };
