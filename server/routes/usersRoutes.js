require("dotenv").config()

const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// Import Schema from models, create and Save a new User using the imported model
const mongoose = require("mongoose")
const User = require("../models/user")
const addUser = mongoose.model('User', User.UserSchema)


// Custom Middleware to find if user logged in, if not return 403 Forbidden
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}



// Using / route for testing, reads DB all
router.route("/")
    .get(async (req, res) => {
        const allUsers = await User.find({})
        res.send({ data: allUsers })
    })

// Post route, take form data and hash it with Bcrypt.Save form data to DB
router.route("/signup")
    .post(async (req, res) => {
        const { name, email, password } = req.body
        // Check if user in DB
        if (await User.findOne({ email: req.body.email })) return res.status(500).send("Email in DB Already")
        // Register user below
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new addUser({ name, email, password: hashedPassword })
        newUser.save()
            .then((data) => {
                res.status(201).send(data)
            }).catch((err) => {
                console.log("Error saving newUser to DB ", err)
                res.status(500).send("Error Saving user to Database")
            })
    })


// Login route check if email in DB, then check password  for match, return JWT
router.route("/login")
    .post(async (req, res) => {
        const email = req.body.email
        const user = await User.findOne({ email:email })
        if (user === null) {
            res.status(404).send("Error User not found")
        } else {
            if (await bcrypt.compare(req.body.password, user.password)) {
                const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET)
                res.status(200)
                    .json({ status: "Sucess!", body: "Success, user in DB, Allow login", accessToken:accessToken })
            } else {
                res.status(500)
                    .json({ err: "Check that your Password or Email are correct" })
            }
        }

        // try out and see if it can be called later, sending user info after login
        res.user = user
    })

//  Test Receiving token
router.route("/post")
    .get(authenticateToken, (req, res) => {
        const food = [
            {id:1, description: "Burritos"},
            {id:2, description: "Quesadillas"},
            {id:3, description:"Tacos"}
        ]
        console.log("req.user tied to token",req.user)
        console.log("req.body.email tied to current req", req.body.email)
        res.json(food)
    })

module.exports = router