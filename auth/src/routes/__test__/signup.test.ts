import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successfull sign up', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@example.com',
      password: '123456',
    })
    .expect(201);
});

it('returns a 400 with as invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test',
      password: '123456',
    })
    .expect(400);
});

it('returns a 400 with as invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@example.com',
      password: '1',
    })
    .expect(400);
});

it('returns a 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@example.com',
      password: '',
    })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: '',
      password: '123456',
    })
    .expect(400);
});

it('disallows duplicate emails ', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

it('Set a cookie after success singuup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
