const express =  require("express");
const employeerModel = require("../Model/employeerModel");
const jobRouter = express.Router();

jobRouter.get("/", async (req, res)=>{
    const job = await employeerModel.find()
    return res.json({"msg": "Success", "job": job});
});
jobRouter.get('/:id',async(req,res)=>{
     const ID = req.params.id;
   const user = await employeerModel.findById(ID);
   return res.send({"msg":"Success","postedJob":user});
})
jobRouter.post("/",async(req,res)=>{
    await employeerModel.create(req.body);
    return res.send({"msg":"Success"})
})
jobRouter.put('/:id',async(req,res)=>{
    const ID = req.params.id;
    
   const user = await employeerModel.findByIdAndUpdate(ID,req.body);
   return res.send({"msg":"Success", user});
})
jobRouter.delete('/:id',async(req,res)=>{
     const ID = req.params.id;
   await employeerModel.findByIdAndDelete(ID);
   return res.send({"msg":"Success"});
})

module.exports = jobRouter;