const express = require("express");
const router = express.Router();
const { getCourses, postCourse } = require("../controllers/course");
const auth = require("../middleware/auth");

router.route("/").get(auth, getCourses).post(auth, postCourse);

module.exports = router;
