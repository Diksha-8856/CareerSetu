const express = require('express');
const userProfileModel = require('../Model/userProfileModel');
const userProfileRoute = express.Router();

// GET ALL
userProfileRoute.get('/', async (req, res) => {
  const user = await userProfileModel.find();
  return res.send({ msg: "Success", userProfile: user });
});

// GET BY ID
userProfileRoute.get('/:id', async (req, res) => {
  const ID = req.params.id;
//   console.log("ID:", ID);

  // ✅ IMPORTANT CHECK
  if (!ID || ID === "null" || ID === "undefined") {
    return res.send({ msg: "Invalid ID" });
  }

  const user = await userProfileModel.findById(ID);

  if (!user) {
    return res.send({ msg: "User not found" });
  }

  return res.send({ msg: "Success", userProfile: user });
});

// CREATE
userProfileRoute.post("/", async (req, res) => {
  await userProfileModel.create(req.body);
  return res.send({ msg: "Success" });
});

// UPDATE
userProfileRoute.put('/:id', async (req, res) => {
  const ID = req.params.id;

  if (!ID || ID === "null") {
    return res.send({ msg: "Invalid ID" });
  }

  const user = await userProfileModel.findByIdAndUpdate(ID, req.body, { new: true });

  return res.send({ msg: "Success", user });
});

// DELETE
userProfileRoute.delete('/:id', async (req, res) => {
  const ID = req.params.id;

  if (!ID || ID === "null") {
    return res.send({ msg: "Invalid ID" });
  }

  await userProfileModel.findByIdAndDelete(ID);

  return res.send({ msg: "Success" });
});

module.exports = userProfileRoute;