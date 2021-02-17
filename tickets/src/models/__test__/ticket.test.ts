import { Ticket } from '../ticket';

it('implementing optimistic concurrency control', async (done) => {
  // Create an intance of a ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 54,
    userId: '123',
  });
  // Save the ticket to the database
  await ticket.save();

  // fetch the twice
  const firstinstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  // make to separate changes to the tickets we fetched
  firstinstance!.set({ price: 10 });
  secondInstance!.set({ price: 15 });
  // save the first fetched ticket
  await firstinstance!.save();
  // save the second fetched ticket an expect an error

  try {
    await secondInstance!.save();
  } catch (error) {
    return done();
  }

  throw new Error('Should not reach this point');
});

it('increments the version number on multiple saves', async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 54,
    userId: '123',
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);

  await ticket.save();
  expect(ticket.version).toEqual(1);

  await ticket.save();
  expect(ticket.version).toEqual(2);
});
