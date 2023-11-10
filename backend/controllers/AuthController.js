const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d", // Token expires in 1 day
  });
};

router.post("/register", async (req, res) => {
  try {
    let user = new User(req.body);
    user = await user.save();

    const token = generateToken(user);
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !(await user.comparePassword(req.body.password))) {
      return res.status(401).send({ message: "Authentication failed" });
    }

    const token = generateToken(user);
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
