const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: false,
    default: "",
  },
  lastName: {
    type: String,
    required: false,
    default: "",
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: String,
    required: false,
    default: "",
  },
  gender: {
    type: String,
    required: false,
    default: "",
  },
  contactNumber: {
    type: String,
    required: false,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ["admin", "editor", "viewer"],
    default: "viewer",
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
    default: "",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("User", userSchema);
