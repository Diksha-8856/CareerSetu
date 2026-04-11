const mongoose = require('mongoose');
const userProfileSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    resume:{
             data: Buffer,
  contentType: String
    },
    phone:{
        type:String,
        required:true
    },
     coverLetter:{
        type:String,
        required:true
    },
     experience:{
        type:String,
        required:true
    },
     skills:{
        type:String,
        required:true,
        unique:true
    },
},{timestamps:true});

module.exports = mongoose.model("applyJob",userProfileSchema);