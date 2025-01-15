# Web Frameworks: Setting Up a Project

## What Are Frameworks?

Frameworks are collections of pre-written code, tools, and libraries that streamline the development of applications. They allow developers to:

- Build applications faster and smarter.
- Focus on application logic without repetitive tasks.
- Leverage pre-built components for efficiency.

### Example
Creating a web application from scratch is like building a car entirely from raw materials. A framework provides you with a ready-to-assemble kit that includes the essential parts, saving time and effort.

---

## Top 10 Frameworks for Web Applications

Here’s a list of some widely-used frameworks:

1. **Ruby on Rails (Ruby)**  
2. **Django (Python)**   
3. **Meteor (JavaScript)**  
4. **Express (JavaScript)**  

---

## What Is MVC (Model-View-Controller)?

MVC is an architectural pattern that separates an application into three components, ensuring scalability and maintainability:

1. **Model**: Handles all data-related logic, including database interactions like creating, reading, updating, and deleting records.
2. **View**: The user interface that displays data and receives user inputs. It includes HTML, CSS, and JavaScript.
3. **Controller**: The intermediary between the Model and View. It processes user inputs, updates the Model, and renders the View.

### Example Workflow
1. The user requests their profile by clicking "View Profile."
2. The **View** sends the request to the **Controller**.
3. The **Controller** retrieves data from the **Model**.
4. The **Model** fetches data from the database and returns it to the **Controller**.
5. The **Controller** renders the **View**, displaying the profile data to the user.

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

### 2. Template Engines
Template engines help generate dynamic HTML pages with variables and logic. Popular template engines include:

Handlebars.js
EJS (Embedded JavaScript)
Pug
