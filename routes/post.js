const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define the schema for the post
const postSchema = new Schema({
    postText: {
        type: String,
        required: true
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'User'
      
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    }
});

// Create the Post model using the schema
module.exports = mongoose.model('Post', postSchema);

 