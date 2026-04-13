const mongoose = require("mongoose");

const empSchema = mongoose.Schema({
    comName: {type: String, required: true},
    comWork: {type: String, required: true},   //Company क्या काम करती है, उसका description
    comAddress:	{type: String, required: true},
    empName: {type: String, required: true},		
    empPhone: {type: String, required: true},		
    empEmail: {type: String, required: true, unique: true},
    empAadharNum: {type: String, required: true},
    panNum: {type: String, required: true},  //company's PAN num
    gstNum: {type: String, required: true},
    regDate: {type: String, default: Date.now },   // ✅ auto fill on create jb employer portal pr register kia h vo
    password: {type: String, required: true},
    role:{type:String,default:"employer"}
}, {timestamps: true});

module.exports = mongoose.model("employer", empSchema);