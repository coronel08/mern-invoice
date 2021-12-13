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
    * [] Setup routing using react-router-dom v6
* [] Handle Backend ```/server```
    * [] Create User login and signup section
        * [] Interact with Database and model data
    * [] Create User Authentication



---

#### Resources and Links

[Mern Setup](https://niruhan.medium.com/creating-a-simple-mern-fullstack-application-2cbcfbdf3940)

[Inspo](https://dev.to/panshak/i-created-a-full-stack-invoicing-application-using-the-mern-stack-27mp) and [Git](https://github.com/Panshak/arcinvoice)