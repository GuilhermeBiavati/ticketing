import {
    NotAuthorizedError,
    NotFoundError,
    requireAuth,
} from '@gbticketing/common';
import express, {Request, Response} from 'express';
import {Order, OrderStatus} from '../models/order';
import {param} from "express-validator";
import mongoose from "mongoose";

const router = express.Router();

router.delete(
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

        order.status = OrderStatus.Cancelled;
        await order.save();

        res.status(204).send(order);
    }
);

export {router as deleteOrderRouter};
