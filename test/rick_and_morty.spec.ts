import pactum from 'pactum';
import { StatusCodes } from 'http-status-codes';
import { SimpleReporter } from '../simple-reporter';
import { faker } from '@faker-js/faker';

describe('Rick and Morty API', () => {
  const password = faker.string.numeric(9);
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://reqres.in/api-docs';

  beforeAll(() => p.reporter.add(rep));
  afterAll(() => p.reporter.end());

  describe('Character', () => {
    it('POST', async () => {
      await p
        .spec()
        .post(`${baseUrl}/login`)
        .withJson({
          username: faker.company.name(),
          email: faker.internet.email(),
          password: password
        })
        .expectStatus(StatusCodes.OK);
    });
  });
});
