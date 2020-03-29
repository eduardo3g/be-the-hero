const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback(); // clean the database
    await connection.migrate.latest();   // runs the migrations
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('Should be able to create a new NGO', async () => {
    const response = await request(app).post('/ongs').send({
      name: "Lar da Vó Miriam",
      email: "contato@mail.com",
      whatsapp: "5511976043113",
      city: "São Paulo",
      uf: "SP"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
})