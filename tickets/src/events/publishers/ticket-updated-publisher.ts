import { Publisher, Subjects, TicketUpdatedEvent } from '@gbticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
