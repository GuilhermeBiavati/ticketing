import express, { Response, Request } from 'express';
import { requireAuth } from '@gbticketing/common';
import { body } from 'express-validator';

const router = express.Router();
// @ts-ignore
router.post(
  '/api/tickets',
  // @ts-ignore
  requireAuth,
  [body('title').not().isEmpty().withMessage('Título é requirido')],
  (req: Request, res: Response) => {
    res.send(200);
  }
);

export { router as createTicketRouter };
