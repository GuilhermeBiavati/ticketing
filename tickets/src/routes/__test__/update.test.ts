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
it('returns a 401 if the user in not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put('/api/tickets/' + id)
    .send({ title: 'sdafasdfda', price: 111 })
    .expect(401);
});

it('returns a 401 if the user not own the ticket', async () => {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({ title: 'sdafasdfda', price: 111 })
    .expect(201);

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', global.signin())
    .send({
      title: 'sdafasdaseddsaddf13213fda',
      price: 11123123,
    })
    .expect(401);
});

it('returns a 400 if the provides an invalid title or price', async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({ title: 'sdafasdfda', price: 111 })
    .expect(201);

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: '',
      price: 11123123,
    })
    .expect(400);

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'vbxcvbcv',
      price: -10,
    })
    .expect(400);
});
it('updates the ticket provided valid inputs', async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({ title: 'sdafasdfda', price: 111 })
    .expect(201);

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'new Title',
      price: 150,
    })
    .expect(200);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200);

  expect(ticketResponse.body.title).toEqual('new Title');
  expect(ticketResponse.body.price).toEqual(150);
});
