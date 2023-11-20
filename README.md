# Quiz14-Automatic-API-Generator-Tool

This project serves as an example of using LoopBack4 as an automatic API generator tool. The repository contains several activities showcasing different aspects of LoopBack4, following tutorials from the [official LoopBack website](https://loopback.io/doc/en/lb4/index.html).

## Activity 1: Getting Started

### Step 1: Install Node.js

Before installing LoopBack, ensure Node.js (version 8.9.x or higher) is installed on your machine.

### Step 2: Install LoopBack 4 CLI

The LoopBack 4 CLI is a command-line interface that scaffolds projects or extensions. Install it globally:

```bash
npm install -g @loopback/cli
```

### Step 3: Create a New Project

Use the LoopBack 4 CLI to create a new project:

```bash
lb4 app
```

Answer the prompts as follows:

- Project name: getting-started
- Project description: Getting started tutorial
- Project root directory: (getting-started)
- Application class name: StarterApplication
- Select features to enable in the project:
  - Enable eslint
  - Enable prettier
  - Enable mocha
  - Enable loopbackBuild
  - Enable vscode
  - Enable docker
  - Enable repositories
  - Enable services

### Step 4: Starting the Project

Run the project with:

```bash
cd getting-started
npm start
```

Visit [http://127.0.0.1:3000/ping](http://127.0.0.1:3000/ping) to test the project.

### Step 5: Add Your Own Controller

Add a custom "Hello World" controller:

```bash
lb4 controller
```

Answer the prompts as follows:

- Controller class name: hello
- What kind of controller would you like to generate? Empty Controller

Paste the provided code into `/src/controllers/hello.controller.ts`.


```bash
import {get} from '@loopback/rest';
export class HelloController {
  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }
}
```

### Step 6: Test Your Application

Start the application:

```bash
npm start
```

Visit [http://127.0.0.1:3000/hello](http://127.0.0.1:3000/hello) to see "Hello world!"


### Result:

![](images/Screenshot%202023-11-19%20at%205.27.47%E2%80%AFPM.png)






## Activity 2: To Do

### Overview

This tutorial guides you through creating a basic API for a to-do list using LoopBack 4. Learn how to build REST APIs in just 5 steps.

### Setup

Ensure you have the following installed:

- Node.js (v10 or greater)
- Familiarity with JavaScript (ES6) and REST concepts
- LoopBack 4 CLI toolkit: `npm i -g @loopback/cli`

### Steps

1. Create app scaffolding
2. Add Todo model
3. Add a datasource
4. Add a repository
5. Add a controller
6. Putting it all together
7. Bonus: Integrate with a geo-coding service


### Result:


![](images/Screenshot%202023-11-19%20at%206.18.24%E2%80%AFPM.png)

![](images/Screenshot%202023-11-19%20at%206.19.19%E2%80%AFPM.png)

![](images/Screenshot%202023-11-19%20at%206.19.41%E2%80%AFPM.png)



## Activity 3: Todo-List

### Overview

This tutorial demonstrates how to create a set of APIs for models that are related to one another.

### Setup

Before you start with this tutorial, ensure you have the prerequisites and follow these setup steps:

1. **Prerequisites:**
   - Node.js at version 10 or greater installed.

2. **Install LoopBack 4 CLI Toolkit:**
   ```bash
   npm i -g @loopback/cli
   ```

3. **Optional: Follow from @loopback/example-todo:**
   - If you're following from the tutorial in @loopback/example-todo, you can skip to the first step.
   - Otherwise, make sure to complete the following steps.

4. **Install LoopBack Example Todo:**
   ```bash
   lb4 example todo
   ```

   This step is recommended for those not familiar with LoopBack4 or to catch up to where this tutorial will continue from.

   **Note:** This tutorial does not assume the optional geo-coding step has been completed. Whether completed or not, the content and steps in this tutorial remain the same.


### Tutorial Steps
1. Add TodoList Model
2. Add TodoList Repository
3. Add TodoList and TodoList’s Todo Controller

### Result:

![](images/Screenshot%202023-11-19%20at%208.21.23%E2%80%AFPM.png)

![](images/Screenshot%202023-11-19%20at%208.21.32%E2%80%AFPM.png)

![](images/Screenshot%202023-11-19%20at%208.21.42%E2%80%AFPM.png)

![](images/Screenshot%202023-11-19%20at%208.21.52%E2%80%AFPM.png)

## Activity 4: soap-calculator

### Overview
Integrate a SOAP web service with LoopBack 4 and expose its methods through the REST API server. Includes acceptance and integration tests.

### Setup
Ensure you have Node.js (v10 or greater) and the LoopBack 4 CLI toolkit:

```bash
npm i -g @loopback/cli
```

### Tutorial Steps
1. SOAP web service overview
2. Scaffold the application
3. Add a data source
4. Add a service proxy
5. Add a controller
6. Run and test the application


### Results
![](images/Screenshot%202023-11-19%20at%209.00.36%E2%80%AFPM.png)

![](images/Screenshot%202023-11-19%20at%209.00.57%E2%80%AFPM.png)


## Activity 5: Creating an Express Application with LoopBack REST API

### Overview

Express can be used as middleware to mount a LoopBack 4 REST API, enabling users to mix and match features according to their needs.

### Tutorial Steps

### Step 1: Create your LoopBack Application

Scaffold your application using the following command:

```bash
lb4 app note
```

Answer the prompts as follows:
- Project description: An application for recording notes.
- Project root directory: (note)
- Application class name: (NoteApplication)
- Enable eslint, prettier, mocha, loopbackBuild, vscode, docker, repositories, and services.

### Step 2: Add Note Model

Inside the project folder, run the following command to create the Note model:

```bash
lb4 model
```

Configure the Note model with properties such as id, title, and content.

### Step 3: Add a DataSource

Create a simple in-memory datasource by running:

```bash
lb4 datasource ds
```

Similar to the Todo example, let’s create the ds.json by creating a data folder at the application’s root.

```bash
mkdir data
touch data/ds.json
```

Then copy and paste the following into the ds.json file:

```bash
{
  "ids": {
    "Note": 3
  },
  "models": {
    "Note": {
      "1": "{\"title\":\"Things I need to buy\",\"content\":\"milk, cereal, and waffles\",\"id\":1}",
      "2": "{\"title\":\"Great frameworks\",\"content\":\"LoopBack is a great framework\",\"id\":2}"
    }
  }
}
```

### Step 4: Add Note Repository

Run the following command to create the repository:

```bash
lb4 repository
```

Choose the DsDataSource as the datasource and Note model as the model.

### Step 5: Add Note Controller

Create a controller using the following command:

```bash
lb4 controller note
```

Choose the REST Controller with CRUD functions type, Note model, and NoteRepository repository.

### Step 6: Create a Facade Express Application

Install dependencies for the Express module:

```bash
npm install --save express
npm install --save-dev @types/express
```

Create a new file `src/server.ts` to set up the Express class.

### Step 7: Boot and Start the Application

Modify the `src/server.ts` file by creating two properties, the Express application instance and LoopBack application instance:

```bash
import express from 'express';
import {ApplicationConfig, NoteApplication} from './application';

export {ApplicationConfig};

export class ExpressServer {
  public readonly app: express.Application;
  public readonly lbApp: NoteApplication;
  private server?: http.Server;

  constructor(options: ApplicationConfig = {}) {
    this.app = express();
    this.lbApp = new NoteApplication(options);
  }
}
```

Now, inside the constructor, we’re going to add the basepath and expose the front-end assets via Express:
```bash
this.app.use('/api', this.lbApp.requestHandler);
```

Let’s also modify public/index.html to update the base path:
```bash
<h3>OpenAPI spec: <a href="/api/openapi.json">/openapi.json</a></h3>
<h3>API Explorer: <a href="/api/explorer">/explorer</a></h3>
```

Then, we can add some custom Express routes, as follows:

```bash
import {Request, Response} from 'express';
import path from 'path';

export class ExpressServer {
  private app: express.Application;
  private lbApp: NoteApplication;

  constructor(options: ApplicationConfig = {}) {
    // earlier code

    // Custom Express routes
    this.app.get('/', function (_req: Request, res: Response) {
      res.sendFile(path.resolve('public/express.html'));
    });
    this.app.get('/hello', function (_req: Request, res: Response) {
      res.send('Hello world!');
    });
  }
}
```

And add the public/express.html file to your project.

Finally, we can add functions to boot the Note application and start the Express application:
```bash
import {once} from 'events';

export class ExpressServer {
  public readonly app: express.Application;
  public readonly lbApp: NoteApplication;
  private server?: http.Server;

  constructor(options: ApplicationConfig = {}) {
    //...
  }

  async boot() {
    await this.lbApp.boot();
  }

  public async start() {
    await this.lbApp.start();
    const port = this.lbApp.restServer.config.port ?? 3000;
    const host = this.lbApp.restServer.config.host || '127.0.0.1';
    this.server = this.app.listen(port, host);
    await once(this.server, 'listening');
  }

  // For testing purposes
  public async stop() {
    if (!this.server) return;
    await this.lbApp.stop();
    this.server.close();
    await once(this.server, 'close');
    this.server = undefined;
  }
}
```

Now that our src/server.ts file is ready, then we can modify our src/index.ts file to start the application:
```bash
import {ApplicationConfig, ExpressServer} from './server';

export {ApplicationConfig, ExpressServer, NoteApplication};

export async function main(options: ApplicationConfig = {}) {
  const server = new ExpressServer(options);
  await server.boot();
  await server.start();
  console.log('Server is running at http://127.0.0.1:3000');
}

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST ?? 'localhost',
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
      // Use the LB4 application as a route. It should not be listening.
      listenOnStart: false,
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
```

Please note listenOnStart is set to false to instruct the LB4 application is not listening on HTTP when it’s started as the Express server will be listening.

### Step 8: Start the Application

Run the application with:

```bash
npm start
```

Visit [http://127.0.0.1:3000](http://127.0.0.1:3000) to explore the LoopBack 4 REST API and custom Express routes.


### Result:

![](images/Screenshot%202023-11-19%20at%209.09.06%E2%80%AFPM.png)


