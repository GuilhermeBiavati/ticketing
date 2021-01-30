import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';
import request from 'supertest';
import jwt from 'jsonwebtoken';

declare global {
  namespace NodeJS {
    interface Global {
      signin(): string;
    }
  }
}

let mongo: any;

beforeAll(async () => {
  process.env.JWT_KEY = '123456789';
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = () => {
  //Build a JWT payload. {id, email}

  const payload = {
    id: '123564',
    email: 'test@test.com',
  };

  // Create the JWT
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  //build session object. {jwt: MY_JWT}
  const session = { jwt: token };

  // Turn that session into json
  const sessionJson = JSON.stringify(session);
  // Take Json and encode it as base64
  const base64 = Buffer.from(sessionJson).toString('base64');

  // return a string thats the cookie with the encoded data
  return `express:sess=${base64}`;
};
