const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  course_name: {
    type: String,
    required: true
  },
  course_unit: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("course", CourseSchema);