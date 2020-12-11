import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div id="form-container">
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>Please Enter Correct Details.</p>
        <form>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="areaofspecialization">Area Of Specialization</label>
            <input
              type="text"
              name="areaofspecialization"
              id="areaofspecialization"
              placeholder="Area Of Specialization"
            />
          </div>
          <div className="form-group">
            <label htmlFor="rankorgradelevel">Rank or Grade Level</label>
            <input
              type="text"
              name="rankorgradelevel"
              id="rankorgradelevel"
              placeholder="Rank Or Grade Level"
            />
          </div>
          <div className="form-group">
            <label htmlFor="yearsofexperience">Years Of Experience</label>
            <input
              type="text"
              name="yearsofexperience"
              id="yearsofexperience"
              placeholder="Years Of Experience"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Confirm Password"
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

export default Register;
