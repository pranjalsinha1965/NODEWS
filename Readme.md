# Web Frameworks: Setting Up a Project

This document covers setting up a project with an MVC architecture for a Telephone Directory application using MongoDB, Express, and Node.js. Additionally, it touches on advanced front-end frameworks like Angular, React, and Vue. Mastery of NPM and Lodash is also encouraged for efficient development.

---

## What Are Frameworks?
Frameworks are collections of pre-written code, tools, and libraries that streamline the development of applications. They allow developers to:

- Build applications faster and smarter.
- Focus on application logic without repetitive tasks.
- Leverage pre-built components for efficiency.

### Analogy:
Creating a web application from scratch is like building a car entirely from raw materials. A framework provides you with a ready-to-assemble kit that includes the essential parts, saving time and effort.

---

## Top 10 Frameworks for Web Applications

Here’s a list of widely-used frameworks:

1. **Ruby on Rails (Ruby)**
2. **Django (Python)**
3. **Meteor (JavaScript)**
4. **Express (JavaScript)**
5. **Hapi (JavaScript)**
6. **Koa (JavaScript)**
7. **Sails (JavaScript)**
8. **Spring Boot (Java)**
9. **Angular (JavaScript)**
10. **React (JavaScript)**

---

## What Is MVC (Model-View-Controller)?
MVC is an architectural pattern that separates an application into three components, ensuring scalability and maintainability.

### Components:
1. **Model:** Manages data and business logic, including database interactions such as creating, reading, updating, and deleting records.
2. **View:** Handles the presentation layer, including HTML, CSS, and JavaScript.
3. **Controller:** Acts as an intermediary between the Model and View, processing user inputs, updating the Model, and rendering the View.

### Example Workflow:
1. The user requests their profile by clicking "View Profile."
2. The **View** sends the request to the **Controller**.
3. The **Controller** retrieves data from the **Model**.
4. The **Model** fetches data from the database and returns it to the **Controller**.
5. The **Controller** renders the **View**, displaying the profile data to the user.

---

## HTTP Methods

While setting up this project, focus on the following HTTP methods:
1. **GET:** Retrieve data from the server.
2. **POST:** Create new data on the server.
3. **PUT:** Update existing data.
4. **PATCH:** Partially update existing data.
5. **DELETE:** Remove data from the server.

---

## Setting Up a Node.js Server for MVC

### 1. Setting Up the Nodemon Engine
Nodemon automatically restarts your Node.js application when changes are made.

- Install Nodemon:
  ```bash
  npm install -g nodemon
  nodemon app.js
  npm install ejs
  ```

- Terminal commands to initialize the project and install necessary packages:
  ```bash
  npm init
  npm install express
  npm install ejs
  ```

### 2. Template Engines
Template engines help generate dynamic HTML pages with variables and logic. Popular template engines include:

- **Handlebars.js**
- **EJS (Embedded JavaScript)**
- **Pug**

---

## Database Setup

### Steps:
1. **Install MongoDB:**
   - Download MongoDB Community Server for your system.
   - Verify the installation by checking the version:
     ```bash
     mongo --version
     ```

2. **Install Robo 3T:**
   - Download and install Robo 3T for a graphical interface to manage MongoDB.

3. **Install Mongoose:**
   - Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.
     ```bash
     npm install mongoose
     ```

4. **Setup Configuration:**
   - Create a configuration file for MongoDB connection.

5. **Run Server & Test:**
   - Start the server using Nodemon:
     ```bash
     nodemon app.js
     ```
   - Test your routes and database connections.

### Notes:
- On macOS, MongoDB can be installed using Homebrew.
- On Windows, consider using WSL or MongoSH for efficient database management.
- Robo 3T can be downloaded from their official site.

By following this guide, you will have a robust MVC-based Telephone Directory application ready for deployment and scaling.

