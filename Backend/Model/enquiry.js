const mongoose=require('mongoose')
const enquirySchema=mongoose.Schema({
name:{
    type:String,
    required:true,
},
gender:{
    type:String,
    required:true,
},
address:{
    type:String,
},
contactno:{
    type:String
},
email:{
    type:String,
    required:true,
    unique:true

},
enquirytext:{
    type:String,
},
enquirytype:{
    type:String,
},
postdate:{
    type:String
}
},{timestamps:true})
module.exports=mongoose.model('enquiry',enquirySchema)