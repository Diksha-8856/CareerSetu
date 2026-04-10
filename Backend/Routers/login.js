const express = require('express');
const loginModal = require('../Model/loginModal');
const userRouter = express.Router();


userRouter.post("/" , async(req,res)=>{
  const {email,password} = req.body;
  const user = await loginModal.findOne({email});
  if(user){
    if(user.password == password){
      res.json({"msg" :"Success",role:"jobSeeker",id:user._id})
    }
    else{
      res.json({"msg":"Password not Matched"})
    }
  }
  else{
      res.json({"msg":"User not exist"})
    }
  }
)
module.exports = userRouter;
