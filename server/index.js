const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const serverPort = 3001
const multer = require('multer');


// Middlewares
app.use(cors({ origin: 'http://localhost:3000', }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//  for parsing multi part data, makes postman work
app.use(multer().array()); 


// Routes
app.get("/", (req, res) => {
    res.send({ data: "Server is running" })
})

app.get("*", (req,res) => {
    res.status(404)
        .json({
            message: "Route does not exist",
            app: "Express-Routes"
        })
})

app.get("/register", (req, res) => {
    res.status(200)
    res.json({ message: "Running Register Page" })
})


app.post("/register", (req, res) => {
    console.log(req.body)
    res.status(200)
        .json({ status: "Success !", data: { body: req.body } })
})

// Run App
app.listen(serverPort, () => console.log(`Running on ${serverPort}`))




// Database Connection, use process.env to secure it later, just get it running right now
const DB_URL = 'mongodb://root:example@localhost:3008/invoice?authSource=admin'
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection to MongoDB worked"))
    .catch(err => console.log("WE have an error", err))
const db = mongoose.connection
module.exports = db

// Import Schema from Models file
const User = require('./models')
// Create and Save a new User using imported model
const Test = mongoose.model('User', User.userSchema)

/* Tested and turned off
const cooky = new Test({id:2, name: 'Cooky Coronel'})
cooky.save()
    .then(data => console.log("Wrote the following to mongo, ", data))
    .catch(err => console.log("Saving error", err))
    const findName = async() => {
        const foundName = await Test.findOne({name: "Cooky Coronel"})
        console.log(foundName)
    }
    findName() 

    // Make endpoint for API
    app.get("/name", async (req, res) => {
    const user = await User.find({})
    res.send(user)
})
*/

