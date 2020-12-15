import React, { Fragment, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./style.css";
import Navbar from "./navbar";
import Course from "./course";

import { loadAdmin, getUsers } from "../../redux/admin/admin.action";
import { selectUsers } from "../../redux/admin/admin.selectors";

const Profile = ({ loadAdmin, getUsers, users }) => {
  useEffect(() => {
    loadAdmin();
    getUsers();
  }, [loadAdmin, getUsers]);

  return (
    <Fragment>
      <Navbar />
      <section id="admin-container" className="bg-light py-1">
        <div className="admin-profile">
          <div className="admin-profiles my-1">
            <div>
              <h1>
                <span className="text-primary">
                  <i className="fas fa-user"></i> Welcome{" "}
                </span>
                Admin
              </h1>
              <p>Create and Allocate Courses</p>
            </div>
            <a href="#course-modal" className="btn-block">
              Add Course
            </a>
          </div>
          {/* <!-- <div className="bottom-line w-52"></div> */}

          <div className="my-1">
            <h2 className="py-1">Lecturers Details</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Areas Of Specialization</th>
                  <th>Rank</th>
                  <th>Years Of Experience</th>
                  <th>Course Allocated</th>
                  <th>Allocation</th>
                  {/* <th>Operation</th> */}
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.fullname}</td>
                      <td>{user.area_of_specialization}</td>
                      <td>{user.grade_level}</td>
                      <td>{user.years_of_experience}</td>
                      <td>{user.course_allocated}</td>
                      <td>
                        <button type="submit" className="btn">
                          Allocate
                        </button>
                      </td>
                      {/* <td>
                        <i className="fas fa-trash-alt fa-1x ml-1"></i>
                      </td> */}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Course />
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
});

export default connect(mapStateToProps, { loadAdmin, getUsers })(Profile);
