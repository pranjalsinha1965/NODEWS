# Web Frameworks: Setting Up a Project

The beginning starts with setting up the architecture for creating the MVC structure of my Telephone Directory. The components of this application includes MongoDB + Express + Node. Apart from that we cane also focus on advanced front end frameworks like Angular, React and Vue. We just need to be free with NPM and Lodash. 

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

5. **Hapi (JavaScript)**

6. **KOA (JavaScript)**

7. **Sails 1.0**
   
---

## What Is MVC (Model-View-Controller)?

MVC is an architectural pattern that separates an application into three components, ensuring scalability and maintainability. It`s the way of structuring your project files. Models data received from the database can be read, updated and deleted as well. Whereas when it comes to view language includes HTML5 + CSS3 + JavaScript with any AJAX based language as well. 

1. **Model**: Handles all data-related logic, including database interactions like creating, reading, updating, and deleting records.
2. **View**: The user interface that displays data and receives user inputs. It includes HTML, CSS, and JavaScript.
3. **Controller**: The intermediary between the Model and View. It processes user inputs, updates the Model, and renders the View.

### Example Workflow
1. The user requests their profile by clicking "View Profile."
2. The **View** sends the request to the **Controller**.
3. The **Controller** retrieves data from the **Model**.
4. The **Model** fetches data from the database and returns it to the **Controller**.
5. The **Controller** renders the **View**, displaying the profile data to the user.

If a user wants to see their profile view will send the request controller in controller the code to read the profile will execute and send a request to model. After this model will return the requested data by controller will display the data view to the user. 

WhilE we setup this project we continuously focus on methods like: 

1. GET
2. POST
3. PUT
4. PATCH
5. UPDATE
6. DELETE
   

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

- Terminal commands:
```bash
npm init
npm install --save
npm instal express
npm install ejs 
```

### 2. Template Engines
Template engines help generate dynamic HTML pages with variables and logic. Popular template engines include:

Handlebars.js

EJS (Embedded JavaScript)

Pug

### Database: 
Steps: 
1. INSTALL MONGODB and Check it`s version
2. INSTALL ROBO3T
3. MONGOOSE (INSTALL)
4. SETUP CONFIG
5. RUN SERVER & TEST
   
