import faker from 'faker';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiHttp from 'chai-http';
import app from '../app';
import db from '../database';

chai.use(chaiAsPromised);
chai.use(chaiHttp);

const request = chai.request(app).keepOpen();
const { expect } = chai;

after(() => {
  request.close();
  db.query('DELETE FROM users');
});

describe('POST auth/signup', () => {
  const url = '/api/auth/signup';
  context('post request', () => {
    const userWithoutPassword = {
      email: faker.internet.email(),
      password: '',
    };
    it('Should throw error if password is not inputted', async () => {
      const { status, body: { error } } = await request
        .post(url)
        .send(userWithoutPassword);
      expect(status).to.be.eql(422);
      expect(error).to.be.instanceOf(Object);
      expect(error).to.have.a.property('password');
    });
  });
  context('post request', () => {
    const userWithoutEmail = {
      email: '',
      password: faker.internet.email(),
    };
    it('Should throw error if email is not inputted', async () => {
      const { status, body: { error } } = await request
        .post(url)
        .send(userWithoutEmail);
      expect(status).to.be.eql(422);
      expect(error).to.be.instanceOf(Object);
      expect(error).to.have.a.property('email');
    });
  });
  context('post request', () => {
    const userWithInvalidEmail = {
      email: faker.internet.userName(),
      password: faker.internet.email(),
    };
    it('Should throw error if password is not inputted', async () => {
      const { status, body: { error } } = await request
        .post(url)
        .send(userWithInvalidEmail);
      expect(status).to.be.eql(422);
      expect(error).to.be.instanceOf(Object);
      expect(error).to.have.a.property('email');
    });
  });

  context('post request', () => {
    const user = {
      email: 'emekaofe22@gmail.com',
      password: 'Maths@104',
    };
    it('Should throw error if  user already exist in the database', async () => {
      const requestOne = await request
        .post(url)
        .send(user);
      const requestTwo = await request
        .post(url)
        .send(user);
      expect(requestOne.status).to.be.eql(201);
      expect(requestOne.body).to.have.a.property('data');
      expect(requestTwo.status).to.be.eql(409);
      expect(requestTwo.body).to.have.a.property('error');
    });
  });

  context('post request', () => {
    const user = {
      email: faker.internet.email(),
      password: 'Maths@104',
    };
    it('Should register user successfully', async () => {
      const { status, body: { data } } = await request
        .post(url)
        .send(user);
      const userToken = data.token;
      expect(status).to.be.eql(201);
      expect(data.email).to.be.eqls(user.email);
      expect(status).to.be.eql(201);
      expect(data).to.be.instanceOf(Object);
      expect(data.token).to.be.eql(userToken);
    });
  });
});

describe('Signin API', () => {
  const url = '/api/auth/signin';

  context('post request', () => {
    const userWithoutPassword = {
      email: faker.internet.email(),
      password: '',
    };
    it('Should throw error if password is not inputted', async () => {
      const { status, body: { error } } = await request
        .post(url)
        .send(userWithoutPassword);
      expect(status).to.be.eql(422);
      expect(error).to.be.instanceOf(Object);
      expect(error).to.have.a.property('password');
    });
  });

  context('post request', () => {
    const userWithoutEmail = {
      email: '',
      password: faker.internet.email(),
    };
    it('Should throw error if email is not inputted', async () => {
      const { status, body: { error } } = await request
        .post(url)
        .send(userWithoutEmail);
      expect(status).to.be.eql(422);
      expect(error).to.be.instanceOf(Object);
      expect(error).to.have.a.property('email');
    });
  });

  context('post request', () => {
    const userWithoutEmail = {
      email: faker.internet.password(),
      password: 'passwor',
    };
    it('Should throw error if password is less than 6 characters', async () => {
      const { status, body: { error } } = await request
        .post(url)
        .send(userWithoutEmail);
      expect(status).to.be.eql(422);
      expect(error).to.be.instanceOf(Object);
      expect(error).to.have.a.property('password');
    });
  });

  context('post request', () => {
    let loginData;
    before(async () => {
      const userData = {
        email: faker.internet.email(),
        password: 'Maths@103',
      };
      loginData = { email: userData.email, password: userData.password };
      await request
        .post('/api/auth/signup')
        .send(userData);
    });
    it('Should login a user successfuully', async () => {
      const { status, body: { data } } = await request
        .post(url)
        .send(loginData);
      expect(status).to.be.eql(200);
      expect(data.email).to.be.eqls(loginData.email);
    });
  });
});
