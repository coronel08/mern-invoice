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





#### Resources and Links

[Mern Setup](https://niruhan.medium.com/creating-a-simple-mern-fullstack-application-2cbcfbdf3940)

[Inspo](https://dev.to/panshak/i-created-a-full-stack-invoicing-application-using-the-mern-stack-27mp) and [Git](https://github.com/Panshak/arcinvoice)