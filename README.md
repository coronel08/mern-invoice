# Mern Invoice

Using Mernstack to create an invoicing system for fun.

Backend: Express on port 3001
FrontEnd: React on port 3000
Database: Dockerized MongoDB Database on port 3008

---

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

-   /client = Frontend in React
    -   /src
        -   components = Storing universal styled components and javascript components
        -   pages = Store pages templates in js
        -   App.js = Entry Point
-   /database = Using Docker and MongoDB
-   /server = Backend in Express
    -   index.js = Entry Point for express server
    -   /models = models that interact with Database
        -   user
    -   /routes = logic and routing

---

### Todo

-   [] Create Frontend `/client`
    -   [] Setup Page layout and template with styled components and css/html
        -   [x] Header, install font awesome
        -   [x] Body Rough Draft
        -   [] Login Form
            -   [x] Signup form rough draft
                -   [] Replace Signup form with grid
                -   [x] [Redirecting After Login React](https://pretagteam.com/question/what-is-the-correct-way-of-redirecting-after-successful-post-request-in-react) used useNavigate hook from react-router-dom [React-Router-StackOverflow](https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router)
            -   [] Replace Login with Modal [Modal](https://www.w3schools.com/howto/howto_css_login_form.asp)
    -   [x] Setup routing using react-router-dom v6
        -   [x] React router v6 use-Navigate redirect signup form to home page on res from server, fixed bug
    -   [] Refractor navbar styles and styled-components ui pages. Need to destructure ex: `(props.color)` to ` ({color})`
-   [] Handle Backend `/server`
    -   [x] create example .env and try dev environment
            `if (process.env.NODE_ENV !== 'production') { require("dotenv").config() } `
    -   [] Create User Authentication models and logic in DB
    -   [] Create User login and signup section
        -   [] Signup, doing first
            -   [x] Create Signup Form and have it send data to express server [Express and Postman guide](https://iq.opengenus.org/routing-with-express-and-postman/)
            -   [x] Install bcrypt and hash password before sending to Database
            -   [] Create DB logic, add if not already in db.
                -   [] Routes user.js create middleware for login authentication
        -   [] Create login form using signup as example, connect to db as well
            -   [] Login creates JWT
    -   [x] remove get paths from backend, used for testing purposes
    -   [x] Add express router, update routes to routes folder and models to models folder
        -   [x] refractor app.js to use routes in seperate folders.
    -   [x] Setup .env file and use variables for server,
    -   [] Import JWT and use token for authentication[Digital Ocean tutorial](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)
    -   [] remove "/" route used for retreiving evereything from DB about users
-   [] Database

    -   [] Interact with Database and model data
        -   [x] write user login data form from client to backend to Database
            -   [x] data from signup completed
            -   [x] express on login retreive email and send response on server.

---

#### Resources and Links

-   Quick review of promises (then or try -> catch) vs async await [async await](https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a) and [async await another article](https://www.robinwieruch.de/javascript-async-await-without-try-catch/)
-   Exports, Couldnt use ES6 exports in Express.
    Example:`export default` can be named whatever when importing, module.exports need to be called by name on `import {Users} from "file"`

-   Notes :
    -   Fetch vs Axios: can look into doing GET,POST,PUT, DELETE requests from an api or url with these, Fetch is native javascript.
        -   [fetch how to](https://attacomsian.com/blog/using-javascript-fetch-api-to-get-and-post-data)
        -   [Fetch PUT, POST, DELETE](https://attacomsian.com/blog/javascript-fetch-api)
    -   Promise -
    -   JWT and Oauth2 - look into implementing preferably [PKCE](https://curity.io/resources/learn/oauth-pkce/) or [Implicit Flow](https://curity.io/resources/learn/oauth-implicit-flow/). Using cookies and session was the old way of authentication
        -   JWT is a token format, for means of encoding data
        -   Oauth2 is a protocol on access, jwt is built on this protocol. [Oauth code flow](https://curity.io/resources/learn/oauth-code-flow/).
        -   [Oauth2 ELi5](https://medium.com/dailyjs/what-every-software-engineer-should-know-about-oauth-2-0-10f0ef4998e5)

[MongoDB Docs](https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial)

[React Router Docs v6 Tutorial](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md). Breaking changes from v5 to v6. [More Docs](https://reactrouter.com/docs/en/v6/upgrading/v5)

[Mern Setup](https://niruhan.medium.com/creating-a-simple-mern-fullstack-application-2cbcfbdf3940)

[Inspo](https://dev.to/panshak/i-created-a-full-stack-invoicing-application-using-the-mern-stack-27mp) and [Git](https://github.com/Panshak/arcinvoice)


**AUTH**
[Digital Ocean Express JWT](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)

[Auth Tutorial for Express](https://www.codingdeft.com/posts/react-authentication-mern-node-passport-express-mongo/) or [Medium Store JWT in cookie](https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81) or [JWT refresh Token Node Mongo](https://www.bezkoder.com/jwt-refresh-token-node-js-mongodb/)

[SPA authentication](https://andrejgajdos.com/authenticating-users-in-single-page-applications-using-node-passport-react-and-redux/) or [Passport JWT](https://www.mokuji.me/article/passport-jwt-react)

[Dont Store JWT in Local Storage ](https://www.rdegges.com/2018/please-stop-using-local-storage/)

[JWT in REACT ](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/)