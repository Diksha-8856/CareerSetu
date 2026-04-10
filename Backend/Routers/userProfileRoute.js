const express = require('express');
const userProfileModel = require('../Model/userProfileModel');
const userProfileRoute = express.Router();

userProfileRoute.get('/',async(req,res)=>{
   const user = await userProfileModel.find();
   return res.send({"msg":"Success","userProfile":user});
})
userProfileRoute.get('/:id',async(req,res)=>{
     const ID = req.params.id;
   const user = await userProfileModel.findById(ID);
   return res.send({"msg":"Success","userProfile":user});
})
userProfileRoute.post("/",async(req,res)=>{
    await userProfileModel.create(req.body);
    return res.send({"msg":"Success"})
})
userProfileRoute.put('/:id',async(req,res)=>{
    const ID = req.params.id;
   const user = await userProfileModel.findByIdAndUpdate(ID,req.body);
   return res.send({"msg":"Success", user});
})
userProfileRoute.delete('/:id',async(req,res)=>{
     const ID = req.params.id;
   await userProfileModel.findByIdAndDelete(ID);
   return res.send({"msg":"Success"});
})

module.exports = userProfileRoute;