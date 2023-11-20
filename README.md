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

Learn how to create a set of APIs for related models. This tutorial builds on the @loopback/example-todo.

### Setup

Follow steps in the tutorial or use LoopBack 4 CLI to catch up:

```bash
lb4 example todo
```

### Tutorial Steps
Add TodoList Model
Add TodoList Repository
Add TodoList and TodoList’s Todo Controller

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


## Activity 5: 

![](images/Screenshot%202023-11-19%20at%209.09.06%E2%80%AFPM.png)


