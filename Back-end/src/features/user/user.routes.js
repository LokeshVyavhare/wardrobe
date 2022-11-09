const express = require("express");
const User = require("./user.model");

const app = express.Router();

app.post("/signup", async (req, res) => {
  try {
    await User.create(req.body);
    res.send({
      error: false,
      message: "Your account has been created",
    });
  } catch (e) {
    res.send({
      error: true,
      message: "Something went wrong. Please try again.",
    });
  }
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    console.log(password);
    console.log(user);
    if (user.password !== password) {
      res
        .status(404)
        .send({ error: true, message: "Wrong Passwod! Please try again." });
    } else {
      res.status(200).send({
        error: false,
        message: "You've logged in successfully.",
        token: `${user._id}-${user.email}-${user.type}-${user.password}`,
      });
    }
  } catch (e) {
    res
      .status(401)
      .send({ error: true, message: "Somthing went wrong. Please try again." });
  }
});

module.exports = app;
