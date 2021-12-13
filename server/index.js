const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const serverPort = 3001

// Database Connection, use process.env to secure it later, just get it running right now
const DB_URL = 'mongodb://root:example@localhost:3008/invoice?authSource=admin'
mongoose.connect(DB_URL, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log("Connection to MongoDB worked"))
    .catch(err => console.log("WE have an error", err))
const db = mongoose.connection
module.exports = db

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.get("/", (req, res) => {
    res.send({ data: "Server is running" })

})


app.listen(serverPort, () => console.log(`Running on ${serverPort}`))



// Import Schema from Models file
const User = require('./models')
// Create and Save a new User using imported model
const Test = mongoose.model('User',User.userSchema)

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

