import faker from 'faker';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiHttp from 'chai-http';
import app from '../app';
import { mockContactDetails } from './mockData';

chai.use(chaiAsPromised);
chai.use(chaiHttp);

const request = chai.request(app).keepOpen();
const { expect } = chai;
let userToken;

after(() => {
  request.close();
});

describe('POST firebase api/contacts', () => {
  const userData = {
    email: faker.internet.email(),
    password: 'Maths@103',
  };
  before((done) => {
    request
      .post('/api/auth/signup')
      .send(userData)
      .end((err, res) => {
        const { token } = res.body.data;
        userToken = token;
        done();
      });
  });
  it('Should throw error if user tries creating contact without firstName', async () => {
    request
      .post('/api/firebase/contacts')
      .set('Authorization', `Bearer ${userToken}`)
      .send(mockContactDetails.contactsWithoutFirstName)
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body.error).to.be.instanceOf(Object);
        expect(res.body.error).to.have.a.property('firstName');
      });
  });

  it('Should throw error if user tries creating contact without lastName', async () => {
    request
      .post('/api/firebase/contacts')
      .set('Authorization', `Bearer ${userToken}`)
      .send(mockContactDetails.contactsWithoutLastName)
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body.error).to.be.instanceOf(Object);
        expect(res.body.error).to.have.a.property('lastName');
      });
  });

  it('Should throw error if user tries creating contact without phone', async () => {
    request
      .post('/api/firebase/contacts')
      .set('Authorization', `Bearer ${userToken}`)
      .send(mockContactDetails.contactsWithoutPhone)
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body.error).to.be.instanceOf(Object);
        expect(res.body.error).to.have.a.property('phone');
      });
  });

  it('Should throw error if user tries creating contact without address', async () => {
    request
      .post('/api/firebase/contacts')
      .set('Authorization', `Bearer ${userToken}`)
      .send(mockContactDetails.contactsWithoutAddress)
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body.error).to.be.instanceOf(Object);
        expect(res.body.error).to.have.a.property('address');
      });
  });
});
