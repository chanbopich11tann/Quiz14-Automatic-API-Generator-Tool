import {Client, expect} from '@loopback/testlab';
import {NoteApplication} from '../../application';
import {NoteRepository} from '../../repositories';
import {ExpressServer} from '../../server';
import {givenNote, setupExpressApplication} from './test-helper';

describe('NoteApplication', () => {
  let server: ExpressServer;
  let client: Client;
  let lbApp: NoteApplication;
  let noteRepo: NoteRepository;

  before('setupApplication', async () => {
    ({server, client, lbApp} = await setupExpressApplication());
    await changeDataSourceConfig();
    await givenNoteRepository();
  });

  beforeEach(async () => {
    await noteRepo.deleteAll();
  });

  after('closes application', async () => {
    await server.stop();
  });

  it('creates a note', async function () {
    const note = givenNote();
    const response = await client.post('/api/notes').send(note).expect(200);
    expect(response.body).to.containDeep(note);
    const result = await noteRepo.findById(response.body.id);
    expect(result).to.containDeep(note);
  });

  it('gets notes', async () => {
    const note = givenNote();
    let response = await client.get('/api/notes').expect(200);
    expect(response.body).to.be.empty();
    await client.post('/api/notes').send(note).expect(200);
    response = await client.get('/api/notes').expect(200);
    expect(response.body).to.not.be.empty();
  });

  it('displays static front page from Note app', async () => {
    await client
      .get('/api/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .expect(/<h1>express-composition/);
  });

  async function givenNoteRepository() {
    noteRepo = await lbApp.getRepository(NoteRepository);
  }

  async function changeDataSourceConfig() {
    /**
     * Override default config for DataSource for testing so we don't write
     * test data to file when using the memory connector.
     */
    lbApp.bind('datasources.config.ds').to({
      name: 'ds',
      connector: 'memory',
    });
  }
});
