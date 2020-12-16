import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";

import { createCourse } from "../../redux/course/course.action";
import { setAlert } from "../../redux/alert/alert.action";

import Alert from "../alert/alert.component";
import Modal from "../modal";

const AllocateCourse = ({ createCourse, lecturer, allocatehidden }) => {
  const [fullname, setFullname] = useState("");
  const [area_of_specialization, setAreaOfSpecialization] = useState("");
  const [grade_level, setGradeLevel] = useState("");
  const [years_of_experience, setYearOfExperience] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (lecturer) {
      setFullname(lecturer.fullname);
      setAreaOfSpecialization(lecturer.area_of_specialization);
      setGradeLevel(lecturer.grade_level);
      setYearOfExperience(lecturer.years_of_experience);
    }
  }, [lecturer]);

  return (
    <Fragment>
      {allocatehidden ? null : (
        <Modal>
          <h2 className="text-center py-1">Add Course</h2>
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
                <option value="Othere">Other</option>
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

            <button type="submit" id="closeModal" className="btn my-1">
              Create
            </button>
          </form>
        </Modal>
      )}
    </Fragment>
  );
};

export default connect(null, { createCourse, setAlert })(AllocateCourse);
