import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

it('returns a 404 if the provided id goes not exist', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put('/api/tickets/' + id)
    .set('Cookie', global.signin())
    .send({ title: 'sdafasdfda', price: 111 })
    .expect(404);
});
it('returns a 404 if the user in not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put('/api/tickets/' + id)
    .send({ title: 'sdafasdfda', price: 111 })
    .expect(404);
});
it('returns a 404 if the user not own the ticket', async () => {});
it('returns a 400 if the provides an invalid title or price', async () => {});
it('updates the ticket provided valid inputs', async () => {});
