import {Client, givenHttpServerConfig, supertest} from '@loopback/testlab';
import {NoteApplication} from '../../application';
import {Note} from '../../models/note.model';
import {ExpressServer} from '../../server';

export async function setupExpressApplication(): Promise<AppWithClient> {
  const server = new ExpressServer({rest: givenHttpServerConfig()});
  await server.boot();
  await server.start();

  const lbApp = server.lbApp;

  const client = supertest(server.app);

  return {server, client, lbApp};
}

export interface AppWithClient {
  server: ExpressServer;
  client: Client;
  lbApp: NoteApplication;
}

/**
 * Generate a complete Note object for use with tests.
 * @param  A partial (or complete) Note object.
 */
export function givenNote(note?: Partial<Note>) {
  const data = Object.assign(
    {
      title: 'start essay',
      content: 'write thesis',
    },
    note,
  );
  return new Note(data);
}
