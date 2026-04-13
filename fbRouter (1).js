const express =  require("express");
const fbRouter = express.Router();
const fbModel = require("../Models/feedbackModel");

fbRouter.get("/", async (req, res)=>{
    const fb = await fbModel.find();
    return res.json({"msg": "Success", "feedback": fb});
});

fbRouter.post("/", async (req, res)=>{
    await fbModel.create(req.body);
    return res.json({"msg" : "Success"});
});

fbRouter.get("/:id", async (req, res)=>{
    const fb = await fbModel.findById(req.params.id);
    return res.json({"msg": "Success", "feedback": fb});
});

fbRouter.put("/:id", async (req, res)=>{
    await fbModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json({"msg": "Success"});
});

fbRouter.delete("/:id", async (req, res)=>{
    await fbModel.findByIdAndDelete(req.params.id);
    return res.json({"msg": "Success"});
});

module.exports = fbRouter;