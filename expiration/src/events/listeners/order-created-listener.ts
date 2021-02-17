import { Listener, OrderCreatedEvent, Subjects } from '@gbticketing/common';
import { Message } from 'node-nats-streaming';
import { expirationQueue } from '../../queues/expiration-queue';
import { queueGroupName } from './queue-group-name';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
    console.log('waiting this many miliseconds to process the job: ', delay);
    await expirationQueue.add(
      { orderId: data.id },
      {
        delay,
      }
    );

    msg.ack();
  }
}
