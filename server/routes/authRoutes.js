const express = require("express");
const router = express.Router();
const User = require("../models/User");

// 회원가입 API
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "이미 가입된 이메일" });

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "회원가입 성공" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
