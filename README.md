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

### Step 6: Test Your Application

Start the application:

```bash
npm start
```

Visit [http://127.0.0.1:3000/hello](http://127.0.0.1:3000/hello) to see "Hello world!"

!(images/Screenshot 2023-11-19 at 5.27.47 PM.png)|

## Activity 2: To Do

Tutorial on building a simple application with LoopBack 4 key concepts using a bottom-up approach.

## Activity 3: Todo-List

Tutorial on introducing related models and building their API from the Todo tutorial.

## Activity 4: soap-calculator

Tutorial on integrating SOAP web service.

Feel free to explore each activity to learn more about LoopBack4 and its capabilities.
