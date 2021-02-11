import { Publisher, Subjects, OrderCreatedEvent } from '@gbticketing/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
