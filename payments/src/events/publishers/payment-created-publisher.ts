import { PaymentCreatedEvent, Publisher, Subjects } from '@gbticketing/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
