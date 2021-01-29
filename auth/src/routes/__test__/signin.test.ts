import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exists is suplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: '123456',
    })
    .expect(400);
});

it('fails when an incorrect password is suplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: '123456',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: '1223456',
    })
    .expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
  +(await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: '123456',
    })
    .expect(201));

  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: '123456',
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
