const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  area_of_specialization: {
    type: String,
    required: true
  },
  grade_level: {
    type: String,
    required: true
  },
  years_of_experience: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, "Please enter a valid email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Please enter a password with 6 or more characters"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("user", UserSchema);
