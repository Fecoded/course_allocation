import React, { Fragment } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import Navbar from "../navbar";

const Profile = ({ user: { user } }) => {
  return (
    <Fragment>
      <Navbar />
      <section id="container" className="bg-light py-1">
        <div id="profile">
          <h2 className="text-center l-heading">
            <span className="text-primary">Lecturer's</span> Profile
          </h2>
          <div className="bottom-line w-10"></div>
          <div className="text-size">
            <h4>
              Full Name: <span>{user && user.fullname}</span>
            </h4>
            <h4>
              Area Of Specialization:{" "}
              <span>{user && user.area_of_specialization}</span>
            </h4>
            <h4>
              Rank Or Grade Level: <span>{user && user.grade_level}</span>
            </h4>
            <h4>
              Years Of Experience :{" "}
              <span>{user && user.years_of_experience}</span>
            </h4>
            <h4>
              Course Allocated: <span>{user && user.course_allocated}</span>
            </h4>
          </div>
        </div>
        <button type="submit" className="user-btn">
          Click here to Download
        </button>
      </section>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(Profile);
