const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define Schema for DB
const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User
