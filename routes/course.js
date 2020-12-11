const express = require("express");
const router = express.Router();
const { getCourses, postCourse } = require("../controllers/course");
const auth = require("../middleware/auth");

router
  .route("/course")
  .get(auth, getCourses)
  .post(postCourse);

module.exports = router;
