const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists"});
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword
  });

  res.status(201).json({ message: "User created successfully", user: { email: newUser.email, username: newUser.username } });
});

module.exports = router;