const express = require("express");
const EmpLoyerRegister = require("../Model/EmpLoyerRegister");
const employerRoute = express.Router();

// GET ALL
employerRoute.get("/", async (req, res) => {
  const emp = await EmpLoyerRegister.find();
  return res.json({ msg: "Success", employer: emp });
});

// CREATE
employerRoute.post("/", async (req, res) => {
  const emp = await EmpLoyerRegister.create(req.body);
  emp.regDate = emp.createdAt.toISOString().split("T")[0];
  await emp.save();
  return res.json({ msg: "Success" });
});

// GET BY ID
employerRoute.get("/:id", async (req, res) => {
  const emp = await EmpLoyerRegister.findById(req.params.id);
  return res.json({ msg: "Success", employer: emp });
});

// UPDATE
employerRoute.put("/:id", async (req, res) => {
  await EmpLoyerRegister.findByIdAndUpdate(req.params.id, req.body);
  return res.json({ msg: "Success" });
});

// DELETE
employerRoute.delete("/:id", async (req, res) => {
  await EmpLoyerRegister.findByIdAndDelete(req.params.id);
  return res.json({ msg: "Success" });
});

module.exports = employerRoute;