const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
    name: {type: String, required: true},
    role: {type: String, required: true},
    pic: {type: String},
    fbText: {type: String, required: true},
    },{timestamps:true})

module.exports = mongoose.model('feedback',feedbackSchema)