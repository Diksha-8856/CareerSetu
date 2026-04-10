const express=require('express');
const enquiry = require('../Model/enquiry');


const enquiryRoute=express.Router();

 enquiryRoute.get('/',async (req,res)=>{
const user=await enquiry.find();
return res.json({"msg":"Success",user})
 })


enquiryRoute.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const user=await enquiry.findById(id)
    return res.json({"msg":"Success",user})
})



enquiryRoute.post('/',async(req,res)=>{
    const user=req.body;
    await enquiry.create(user);
    return res.json({"msg":"Success"})
})
enquiryRoute.put('/:id',async(req,res)=>{
  const id=req.params.id;
  await enquiry.findByIdAndUpdate(id,req.body)
  return res.json({"msg":"Success"})
})

enquiryRoute.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    await enquiry.findByIdAndDelete(id)
  return res.json({"msg":"Success"})
})


 module.exports=enquiryRoute;
