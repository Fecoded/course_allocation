import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import { createCourse } from "../../redux/course/course.action";
import { setAlert } from "../../redux/alert/alert.action";

import Alert from "../alert/alert.component";
import Modal from "../modal";

const Course = ({ createCourse, setAlert, hidden }) => {
  const [course_name, setCourseName] = useState("");
  const [course_unit, setCourseUnit] = useState("");
  const [level, setLevel] = useState("");
  const [rank, setRank] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (level) {
      createCourse({
        course_name,
        course_unit,
        level,
        rank,
        setCourseName,
        setCourseUnit,
        setRank,
        setLevel,
      });
    } else {
      setAlert("Please select a level from the list", "danger");
    }
  };

  return (
    <Fragment>
      {hidden ? null : (
        <Modal>
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
              <label htmlFor="rankorgradelevel">Rank</label>
              <select
                name="rank"
                id="rankorgradelevel"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
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
        </Modal>
      )}
    </Fragment>
  );
};

export default connect(null, { createCourse, setAlert })(Course);
