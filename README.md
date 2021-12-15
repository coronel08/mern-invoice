# Mern Invoice 
Using Mernstack to create an invoicing system for fun. 

Backend: Express
FrontEnd: React
Database: Dockerized MongoDB Database

React using port 3000, Express using 3001, Mongo using port 3008

## Setup Boilerplate 
Ran the commands below to start my development project. 

```
mkdir ./{client,  database, server}
git init
npx create-react-app ./client
cd ./server && npm init -y && npm i express
docker-compose -f ./database/docker-compose.yml up -d
```

---

## Structure
* /client = Frontend in React
    * /src
        * components = Storing universal styled components and javascript components
        * pages = Store pages templates in js
        * App.js = Entry Point
* /database = Using Docker and MongoDB
* /server  = Backend in Express
    * index.js = Entry Point for express server
    * models.js = database modeling 

---
### Todo
* [] Create Frontend ```/client```
    * [] Setup Page layout and template with styled components and css/html
        * [x] Header, install font awesome maybe tailwind
        * [x] Body Rough Draft
        * [] Login Form
            * [x] Signup form rough draft
                * [] Replace Signup form with grid
            * [] Replace Login with Modal [Modal](https://www.w3schools.com/howto/howto_css_login_form.asp)
    * [x] Setup routing using react-router-dom v6
    * [] Refractor navbar styles and styled-components ui pages. Need to destructure ex: ```(props.color)``` to ``` ({color})``` 
* [] Handle Backend ```/server```
    * [] Create User login and signup section
        * [x] Create Signup Form and have it send data to express server [Express and Postman guide](https://iq.opengenus.org/routing-with-express-and-postman/)
        * [] Interact with Database and model data
        * [] Create login form using signup as example, connect to db as well
    * [] Create User Authentication models and logic in DB

* [] fetch catch error in home.js and signup.js console log on error fix that later. After development

---

#### Resources and Links

[MongoDB Docs](https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial)

[React Router Docs v6 Tutorial](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md). Breaking changes from v5 to v6. [More Docs](https://reactrouter.com/docs/en/v6/upgrading/v5)

[Mern Setup](https://niruhan.medium.com/creating-a-simple-mern-fullstack-application-2cbcfbdf3940)

[Inspo](https://dev.to/panshak/i-created-a-full-stack-invoicing-application-using-the-mern-stack-27mp) and [Git](https://github.com/Panshak/arcinvoice)