import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import { Order, OrderStatus } from '../../models/order';
import { natsWrapper } from '../../nats-wrapper';

it('marks an order as cancelled', async () => {
  // create a ticket eith Ticket Model
  const ticket = Ticket.build({
    title: 'Concert',
    price: 120,
  });
  await ticket.save();

  const user = global.signin();
  //    make a request to create a order
  const { body: order } = await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({
      ticketId: ticket.id,
    })
    .expect(201);
  //    make a request to cancel de order
  console.log(order.id);
  await request(app)
    .delete(`/api/orders/${order.id}`)
    .set('Cookie', user)
    .send({})
    .expect(204);
  //    expectation to make sure the thing is cancelled
  const updatedOrder = await Order.findById(order.id);
  expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled);
});

it('emits a order cancelled event', async () => {
  // create a ticket eith Ticket Model
  const ticket = Ticket.build({
    title: 'Concert',
    price: 120,
  });
  await ticket.save();

  const user = global.signin();
  //    make a request to create a order
  const { body: order } = await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({
      ticketId: ticket.id,
    })
    .expect(201);
  //    make a request to cancel de order
  console.log(order.id);
  await request(app)
    .delete(`/api/orders/${order.id}`)
    .set('Cookie', user)
    .send({})
    .expect(204);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});