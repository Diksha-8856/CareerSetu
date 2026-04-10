const mongoose = require('mongoose');
const userProfileSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
     location:{
        type:String,
        required:true
    },
     phone:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true,
        unique:true
    },
     linkedin:{
        type:String,
        required:true
    },
     gitHub:{
        type:String,
        required:true
    },
     skill:{
        type:String,
        required:true
    },
     education:{
        type:String,
        required:true
    },
     expreience:{
        type:String,
        required:true
    },
     headline:{
        type:String,
    },
     resume:{
       data: Buffer,
  contentType: String
    },
     projectTitle:{
        type:String,
        required:true
    },
     projectDesc:{
        type:String,
        required:true
    },
},{timestamps:true});

module.exports = mongoose.model("userProfile",userProfileSchema);