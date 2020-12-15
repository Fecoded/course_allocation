import React, { useState } from "react";
import { connect } from "react-redux";

import { createCourse } from "../../redux/course/course.action";
import { setAlert } from "../../redux/alert/alert.action";

import Alert from "../alert/alert.component";

const Course = ({ createCourse, setAlert }) => {
  const [course_name, setCourseName] = useState("");
  const [course_unit, setCourseUnit] = useState("");
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (level) {
      createCourse({
        course_name,
        course_unit,
        level,
        grade,
        setCourseName,
        setCourseUnit,
        setGrade,
        setLevel,
      });
    } else {
      setAlert("Please select a level from the list", "danger");
    }
  };

  return (
    <div id="course-modal" className="modalDialog">
      <div className="modal-content">
        <a href="#close" className="close">
          &times;
        </a>
        <h2 className="text-center py-1">Add Course</h2>
        <Alert />
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Course</label>
            <input
              type="text"
              name="course_name"
              value={course_name}
              id="course"
              placeholder="Enter Course"
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="unit">Unit</label>
            <input
              type="text"
              name="course_unit"
              id="unit"
              placeholder="Course Unit"
              value={course_unit}
              onChange={(e) => setCourseUnit(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="grade">Grade</label>
            <input
              type="text"
              name="grade"
              id="grade"
              placeholder="Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="level">Level</label>
            <select
              name="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option>Select</option>
              <option value="100">100 level</option>
              <option value="200">200 level</option>
              <option value="300">300 level</option>
              <option value="400">400 level</option>
            </select>
          </div>
          <button type="submit" id="closeModal" className="btn my-1">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { createCourse, setAlert })(Course);
