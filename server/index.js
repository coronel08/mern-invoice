if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}
const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');


// Middlewares
app.use(cors({ origin: process.env.CORS_ID, }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//  for parsing multi part data, makes postman work
app.use(multer().array()); 



// Database Connection, use process.env to secure it later, just get it running right now
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection to MongoDB worked"))
    .catch(err => console.log("Cant connect to MongoDB", err))
const db = mongoose.connection
module.exports = db



// Routes
app.use("/", require ("./routes/users"))

// Catch all, keep at end of file
app.get("*", (req,res) => {
    res.status(404)
        .json({
            message: "Route does not exist",
            app: "Express-Routes"
        })
})


// Run App
app.listen(process.env.SERVER_PORT, () => console.log(`Running on ${process.env.serverPort}`))
