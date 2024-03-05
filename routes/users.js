const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/pintrests")
// Define the schema for the user
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Post'
    }],
    dp: String, // Assuming dp is for profile picture
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    }
});

// Create the User model using the schema
module.exports = mongoose.model('User', userSchema);

