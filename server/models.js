const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define Schema for DB
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    // Hashed password below
    password: {
        type: String,
        required: true,
    }

})

const User = mongoose.model('User', userSchema)
module.exports = User
