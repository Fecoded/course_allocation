const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
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
