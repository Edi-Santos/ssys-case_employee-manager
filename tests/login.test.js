const { MongoClient } = require('mongodb');
const sinon = require('sinon');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const { describe, it, before, after } = require('mocha');
const jwt = require('jsonwebtoken');
const getConnection = require('./connectionMock.test');

const { expect } = chai;

const server = require('../src/api/app');

chai.use(chaiHTTP);

describe('POST /login', () => {
  let connectionMock;
  const DB = 'PSC_SSYS_Employee_Manager';

  before(async () => {
    // Estabelecendo conexão de teste com o banco antes de executar os testes.
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    // Dropando o banco da conexão de teste e reestabelecendo a conexão com o banco principal
    // ao final de cada teste.
    await connectionMock.db(DB).dropDatabase();
    MongoClient.connect.restore();
  });

  describe('1 - Testando quando campos não são preenchidos (nome e senha)', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/login')
        .send({});
    });
    
    it('retorna status 401', () => {
      expect(response).to.have.status(401);
    });

    it('verifca a propriedade "message"', () => {
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('message');
    });

    it('verfica que a propriedade "message" contém o texto "Os campos devem ser preenchidos."', () => {
      expect(response.body.message).to.be.equal('Os campos devem ser preenchidos.');
    });
  });

  describe('2 - Tenstando quando o login é feito com sucesso', () => {
    let response;
    
    const payloadAdmin = {
      name: 'Admin',
      email: 'admin@ssys.com',
      password: '#4dm1n#'
    };

    before(async () => {
      const { email, password } = payloadAdmin;

      const connMock = connectionMock.db(DB).collection('admin');
      await connMock.insertOne(payloadAdmin);

      response = await chai.request(server)
        .post('/login')
        .send({ email, password });
    });

    it('retorna status 200', () => {
      expect(response).to.have.status(200);
    });

    it('Verifica se a resposta é um objeto', () => {
      expect(response.body).to.be.an('object');
    });

    it('verifica se a resposta contém a propriedade "token"', () => {
      expect(response.body).to.have.property('token');
    });

    it('Testa se a propriedade "token" contém um token JWT válido', () => {
      const token = response.body.token;
      const user = jwt.decode(token);

      expect(user.data.name).to.be.equal('Admin');
    });
  });
});
