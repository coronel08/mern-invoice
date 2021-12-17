const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")


// Import Schema from models, create and Save a new User using the imported model
const mongoose = require("mongoose")
const User = require("../models/user")
const addUser = mongoose.model('User', User.userSchema)

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
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new addUser({ name, email, password: hashedPassword })
        newUser.save()
            .then((data) => {
                res.status(200).send(data)
            }).catch((err) => {
                console.log("Error saving newUser to DB ", err)
                res.status(500).send("Error Saving user to Database")
            })
    })


// Login route check if email in DB, then check password  for match
router.route("/login")
    .post(async (req, res) => {
        const user = await User.findOne({ email: req.body.email })
        if (user === null) {
            res.send("Error User not found")
        } else {
            if (await bcrypt.compare(req.body.password, user.password)) {
                res.status(200)
                    .json({ status: "Sucess!", body: "Success, user in DB, Allow login" })
            } else {
                res.status(500)
                    .json({ err: "Check that your Password or Email are correct" })
            }
        }
    })


module.exports = router