import { Publisher, Subjects, TicketCreatedEvent } from '@gbticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
