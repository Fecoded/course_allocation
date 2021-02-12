import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getCourses } from "../../redux/course/course.action";
import { allocateCourse } from "../../redux/admin/admin.action";
import { selectCourses } from "../../redux/course/course.selector";
import { setAlert } from "../../redux/alert/alert.action";

import Alert from "../alert/alert.component";
import Modal from "../modal";

const AllocateCourse = ({
  allocateCourse,
  lecturer,
  allocatehidden,
  courses,
  getCourses,
  setAlert,
}) => {
  const [fullname, setFullname] = useState("");
  const [area_of_specialization, setAreaOfSpecialization] = useState("");
  const [grade_level, setGradeLevel] = useState("");
  const [years_of_experience, setYearOfExperience] = useState("");
  const [course_allocated, setCourseAllocated] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (course_allocated !== "") {
      allocateCourse({
        id: lecturer._id,
        course_allocated: lecturer.course_allocated + "," + course_allocated,
      });
    } else {
      setAlert("Please select a course from the list", "danger");
    }
  };

  useEffect(() => {
    if (lecturer) {
      setFullname(lecturer.fullname);
      setAreaOfSpecialization(lecturer.area_of_specialization);
      setGradeLevel(lecturer.grade_level);
      setYearOfExperience(lecturer.years_of_experience);
    }
    getCourses();
  }, [lecturer, getCourses]);

  return (
    <Fragment>
      {allocatehidden ? null : (
        <Modal>
          <h2 className="text-center py-1">Allocate Course</h2>
          <Alert />
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="areaofspecialization">
                Area Of Specialization
              </label>
              <select
                name="area_of_specialization"
                id="areaofspecialization"
                value={area_of_specialization}
                onChange={(e) => setAreaOfSpecialization(e.target.value)}
              >
                <option>Select</option>
                <option value="Computer Hardware">Computer Hardware</option>
                <option value="Artificial Intelligent">
                  Artificial Intelligent
                </option>
                <option value="Theoretical Computing">
                  Theoretical Computing
                </option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Computer System">Computer System</option>
                <option value="Database Management">Database Management</option>
                <option value="Computer Programming">
                  Computer Programming
                </option>
                <option value="Internet Programming">
                  Internet Programming
                </option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="rankorgradelevel">Rank</label>
              <select
                name="grade_level"
                id="rankorgradelevel"
                value={grade_level}
                onChange={(e) => setGradeLevel(e.target.value)}
              >
                <option>Select</option>
                <option value="Graduate Assistant">Graduate Assistant</option>
                <option value="Assistant Lecturer">Assistant Lecturer</option>
                <option value="Lecturer 2">Lecturer 2</option>
                <option value="Lecturer 1">Lecturer 1</option>
                <option value="Senior Lecturer">Senior Lecturer</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Professor">Professor</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="yearsofexperience">Years Of Experience</label>
              <input
                type="text"
                name="years_of_experience"
                id="yearsofexperience"
                placeholder="Years Of Experience"
                value={years_of_experience}
                onChange={(e) => setYearOfExperience(e.target.value)}
                required
              />
            </div>
            {lecturer && (
              <div className="form-group">
                <label htmlFor="course">Courses</label>
                <select
                  name="course"
                  value={course_allocated}
                  onChange={(e) => setCourseAllocated(e.target.value)}
                >
                  <option value="">Select</option>
                  {courses.map(
                    (course) =>
                      lecturer.grade_level === course.rank && (
                        <option key={course._id}>{course.course_name}</option>
                      )
                  )}
                </select>
              </div>
            )}

            <button type="submit" id="closeModal" className="btn my-1">
              Allocate
            </button>
          </form>
        </Modal>
      )}
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  courses: selectCourses,
});

export default connect(mapStateToProps, {
  allocateCourse,
  setAlert,
  getCourses,
})(AllocateCourse);
