const Course = require("../model/Course");

// @desc      GET COURSES
// @route     GET api/course
// @access    Private
exports.getCourses = async (req, res, next) => {
  try {
    const course = await Course.find();

    return res.status(200).json({ success: true, data: course });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    CREATE COURSE
// @route   POST /api/course
// @access  Private
exports.postCourse = async (req, res, next) => {
  const { course_name, course_unit, level, rank } = req.body;

  const coursefields = {};
  if (course_name) coursefields.course_name = course_name;
  if (course_unit) coursefields.course_unit = course_unit;
  if (level) coursefields.level = level;
  if (rank) coursefields.rank = rank;

  try {
    let course = await Course.findOne({ course_name });

    if (course) {
      return res.status(400).json({ msg: "Course already exist" });
    }

    course = await Course.create(coursefields);
    return res.status(200).json({ success: true, data: course });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
