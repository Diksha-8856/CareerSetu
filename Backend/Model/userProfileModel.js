const mongoose = require('mongoose');
const userProfileSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    role:{
        type:String,
    },
    about:{
        type:String,
    },
    password:{
        type:String,
    },
    gender:{
        type:String,
    },
    dob:{
        type:String,
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

    },
     gitHub:{
        type:String,
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
    },
     projectDesc:{
        type:String,
    },
},{timestamps:true});

module.exports = mongoose.model("userProfile",userProfileSchema);