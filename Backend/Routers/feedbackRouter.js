const express =  require("express");
const feedbackModel = require("../Model/feedbackModel");
const feedbackRoute = express.Router();

feedbackRoute.get("/", async (req, res)=>{
    const fb = await feedbackModel.find();
    return res.json({"msg": "Success", "feedback": fb});
});

feedbackRoute.post("/", async (req, res)=>{
    await feedbackModel.create(req.body);
    return res.json({"msg" : "Success"});
});

feedbackRoute.get("/:id", async (req, res)=>{
    const fb = await feedbackModel.findById(req.params.id);
    return res.json({"msg": "Success", "feedback": fb});
});

feedbackRoute.put("/:id", async (req, res)=>{
    await feedbackModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json({"msg": "Success"});
});

feedbackRoute.delete("/:id", async (req, res)=>{
    await feedbackModel.findByIdAndDelete(req.params.id);
    return res.json({"msg": "Success"});
});

module.exports = feedbackRoute;