import { Publisher, Subjects, OrderCancelledEvent } from '@gbticketing/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
