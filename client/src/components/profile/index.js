import React, { Fragment } from "react";
import Navbar from "../navbar";

const Profile = () => {
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
              Full Name: <span>John Doe</span>
            </h4>
            <h4>
              Area Of Specialization: <span>MicroBiology, Biochemistry...</span>
            </h4>
            <h4>
              Rank Or Grade Level: <span>15</span>
            </h4>
            <h4>
              Years Of Experience : <span>25years</span>
            </h4>
            <h4>
              Course Allocated: <span>MicroBiology, Biochemistry</span>
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

export default Profile;
