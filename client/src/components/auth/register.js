import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { register } from "../../redux/user/user.action";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { setAlert } from "../../redux/alert/alert.action";

import Alert from "../alert/alert.component";

const Register = ({ register, user: { isAuthenticated }, setAlert }) => {
  const [fullname, setFullname] = useState("");
  const [area_of_specialization, setAreaOfSpecialization] = useState("");
  const [grade_level, setGradeLevel] = useState("");
  const [years_of_experience, setYearOfExperience] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setAlert("Password does not match", "danger");
    } else {
      register({
        fullname,
        area_of_specialization,
        grade_level,
        years_of_experience,
        email,
        password,
      });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div id="form-container">
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>Please Enter Correct Details.</p>
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
            <label htmlFor="areaofspecialization">Area Of Specialization</label>
            <input
              type="text"
              name="area_of_specialization"
              id="areaofspecialization"
              placeholder="Area Of Specialization"
              value={area_of_specialization}
              onChange={(e) => setAreaOfSpecialization(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rankorgradelevel">Rank or Grade Level</label>
            <input
              type="text"
              name="grade_level"
              id="rankorgradelevel"
              placeholder="Rank Or Grade Level"
              value={grade_level}
              onChange={(e) => setGradeLevel(e.target.value)}
              required
            />
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
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="email"
              id="username"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Sign Up
          </button>
          <p className="bottom-text">
            Already have an Account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { register, setAlert })(Register);
