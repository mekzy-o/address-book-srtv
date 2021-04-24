import faker from 'faker';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import db from '../database';

chai.use(chaiHttp);

const baseURL = '/api';
const request = chai.request(app).keepOpen();
const { expect } = chai;

after(() => {
  request.close();
  db.query('DELETE FROM users');
});

describe('POST auth/signup', () => {
  it('should register user successfully', async () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const { body } = await request.post(`${baseURL}/auth/signup`).send(user);
    const userToken = body.data.token;
    expect(body.status).to.be.eql(201);
    expect(body.data).to.be.instanceOf(Object);
    expect(body.data.token).to.be.eql(userToken);
  });
});
