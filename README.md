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
    -   models.js = database modeling

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
    -   [] Create User login and signup section
    -   [x] Create Signup Form and have it send data to express server [Express and Postman guide](https://iq.opengenus.org/routing-with-express-and-postman/)
    -   [x] Install bcrypt and hash password before sending to Database
    -   [] Create DB logic, add if not already in db.
    -   [x] remove get paths from backend, used for testing purposes
    -   [] remove "/" route used for retreiving evereything from DB about users
    -   [x] Add express router, update routes to routes folder and models to models folder
    -   [x] refractor app.js to use routes in seperate folders.
    -   [] Create login form using signup as example, connect to db as well
    -   [] Create User Authentication models and logic in DB
    -   [x] Setup .env file and use variables for server,
    -   create example .env and try dev environment
        `if (process.env.NODE_ENV !== 'production') { require("dotenv").config() } `
-   [] Database
    -   [] Interact with Database and model data
        -   [x] write user login data form from client to backend to Database
            -   [x] data from signup completed
            -   [x] express on login retreive email and send response on server.

-   [] fetch catch error in home.js and signup.js console log on error fix that later. After development

---

#### Resources and Links

Couldnt use ES6 exports in Express. Example:

-   `export default` can be named whatever when importing, module.exports need to be called by name on `import {Users} from "file"`

```
export default function users() {
    return ()
}

or

export const user = () = > console.log("test")
```

would get written as

```
const Users = () => {
    const register = console.log("Register Running")
}

module.exports = Users //can use an object if exporting multiple {}
```

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
