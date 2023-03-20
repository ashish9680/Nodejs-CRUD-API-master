var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
     title: { type: String, required: true },
     description: String,
     date: { type: Date, default: Date.now }
})

module.exports = mongoose.Schema = mongoose.model('posts', postSchema);