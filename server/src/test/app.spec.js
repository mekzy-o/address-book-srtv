import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

const baseURL = '/api';
const request = chai.request(app).keepOpen();
const { expect } = chai;

after(() => {
  request.close();
});

describe('Application start test', () => {
  it('should start the application server', async () => {
    const { body } = await request.get(baseURL);
    expect(body).to.have.property('status');
    expect(body).to.have.property('message');
    expect(body.status).to.be.eql(200);
    expect(body.message).to.be.eql('Welcome to Address Book API Server');
  });
});
