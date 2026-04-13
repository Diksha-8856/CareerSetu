const express = require('express');
const EmpLoyerRegister = require('../Model/EmpLoyerRegister');
const applyJobModal = require('../Model/applyJobModal');
const userProfileModel = require('../Model/userProfileModel');
const employeerModel = require('../Model/employeerModel');
const countRouter = express.Router();

countRouter.get("/",async(req,res)=>{
    const employer = await EmpLoyerRegister.find();
    const applyjob = await applyJobModal.find();
    const jobseeker = await userProfileModel.find();
    const jobPost = await employeerModel.find();
    return res.send({"msg":"Success","TotalEmployer":employer.length,"TotalApplyJob":applyjob.length,"TotalJobSeekers":jobseeker.length,"TotalJobPost":jobPost.length})
})

module.exports = countRouter