const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
        unique : true
    }
})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('user', userSchema)

module.exports = User