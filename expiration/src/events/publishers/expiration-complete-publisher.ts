import {
  Publisher,
  Subjects,
  ExpirationCompleteEvent,
} from '@gbticketing/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
