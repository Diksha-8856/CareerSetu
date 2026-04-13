const express = require("express");
const userProfileModel = require("../Model/userProfileModel");
const EmpLoyerRegister = require("../Model/EmpLoyerRegister");
const loginModal = require("../Model/loginModal");

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  const { email, password } = req.body;

  // 🔹 Check Jobseeker
  const user = await userProfileModel.findOne({ email });

  if (user) {
    if (user.password === password) {
      return res.json({
        msg: "Success",
        role: user.role || "jobseeker",
        id: user._id,
      });
    } else {
      return res.json({ msg: "Password not matched" });
    }
  }

  // 🔹 Check Employer (FIXED 🔥)
  const employer = await EmpLoyerRegister.findOne({ empEmail: email });

  if (employer) {
    if (employer.password === password) {
      return res.json({
        msg: "Success",
        role: employer.role || "employer",
        id: employer._id,
      });
    } else {
      return res.json({ msg: "Password not matched" });
    }
  }
  const admin = await loginModal.findOne({ email });
  if (admin) {
    if (admin.password === password) {
      return res.json({
        msg: "Success",
        role: admin.role || "admin",
        id: admin._id,
      });
    } else {
      return res.json({ msg: "Password not matched" });
    }
  }
  // 🔹 Not Found
  return res.json({ msg: "User not exist" });
});

module.exports = userRouter;
