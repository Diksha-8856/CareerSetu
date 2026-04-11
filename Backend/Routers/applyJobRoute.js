const express =  require("express");
const employeerModel = require("../Model/employeerModel");
const applyJobModal = require("../Model/applyJobModal");
const applyJobRouter = express.Router();

applyJobRouter.get("/", async (req, res)=>{
    const job = await applyJobModal.find()
    return res.json({"msg": "Success", "applyjob": job});
});
applyJobRouter.get('/:id',async(req,res)=>{
     const ID = req.params.id;
   const user = await applyJobModal.findById(ID);
   return res.send({"msg":"Success","applyjob":user});
})
applyJobRouter.post("/",async(req,res)=>{
    await applyJobModal.create(req.body);
    return res.send({"msg":"Success"})
})
applyJobRouter.put('/:id',async(req,res)=>{
    const ID = req.params.id;
   const user = await applyJobModal.findByIdAndUpdate(ID,req.body);
   return res.send({"msg":"Success"});
})
applyJobRouter.delete('/:id',async(req,res)=>{
     const ID = req.params.id;
   await applyJobModal.findByIdAndDelete(ID);
   return res.send({"msg":"Success"});
})

module.exports = applyJobRouter;