# Quiz14 Automatic API Generator Tool

This repository showcases the implementation of APIs using LoopBack 4, a robust and extensible Node.js framework. The project encompasses several activities, each illustrating different aspects of LoopBack 4 through tutorials and examples.

## Activities Overview

### Activity 1: Getting Started

#### Prerequisites
Before you begin, make sure you have Node.js installed on your machine (version 16 or higher).

#### Install LoopBack 4 CLI
```bash
npm i -g @loopback/cli
```

#### Create a New Project
```bash
lb4 app
```

Follow the prompts to configure your project, including enabling features like eslint, prettier, mocha, etc.

#### Starting the Project
```bash
cd getting-started
npm start
```
Visit [http://127.0.0.1:3000/ping](http://127.0.0.1:3000/ping) in your browser to test the project.

#### Adding Your Own Controller
```bash
lb4 controller
```

Follow the prompts to generate an empty controller and paste the provided code into the generated file. Start the application again to see the "Hello World" response at [http://127.0.0.1:3000/hello](http://127.0.0.1:3000/hello).

#### Code Sample
View the generated code for this example [here](hello-world).

### Activity 2: To Do Tutorial
This activity focuses on building a simple application using LoopBack 4 key concepts through a bottom-up approach. Explore the tutorial for detailed instructions.

### Activity 3: Todo-List
The Todo-List tutorial introduces related models and demonstrates building their API based on LoopBack 4 principles. Follow the tutorial for a step-by-step guide.

### Activity 4: SOAP Calculator
The SOAP Calculator tutorial guides you through integrating a SOAP web service into your LoopBack 4 project. Learn how to interact with SOAP APIs seamlessly.

## How to Use
Each activity is organized in its respective directory within this repository. Follow the README.md files in each directory for step-by-step instructions and code samples.

## Additional Resources
For more detailed documentation and information on LoopBack 4, refer to the official [LoopBack 4 Documentation](https://loopback.io/doc/en/lb4/index.html).
