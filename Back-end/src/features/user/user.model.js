const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  type: {
    type: String,
    required: true,
    enum: ["customer", "seller"],
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
