import React, { Fragment, useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./style.css";
import Navbar from "./navbar";
import Course from "./course";
import AllocateCourse from "./allocateCourse";

import { loadAdmin, getUsers } from "../../redux/admin/admin.action";
import {
  selectToggleHidden,
  selectAllocateToggleHidden,
} from "../../redux/modal/modal.selector";
import {
  toggleModalHidden,
  toggleAllocateModalHidden,
} from "../../redux/modal/modal.action";
import { selectUsers } from "../../redux/admin/admin.selectors";

const Profile = ({
  loadAdmin,
  getUsers,
  users,
  hidden,
  allocatehidden,
  toggleModalHidden,
  toggleAllocateModalHidden,
}) => {
  const [lecturer, setLecturer] = useState("");

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
            <button onClick={() => toggleModalHidden()} className="btn-block">
              Add Course
            </button>
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
                        <button
                          type="submit"
                          className="btn"
                          onClick={() => {
                            setLecturer(user);
                            toggleAllocateModalHidden();
                          }}
                        >
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
      <Course hidden={hidden} />
      <AllocateCourse allocatehidden={allocatehidden} lecturer={lecturer} />
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
  hidden: selectToggleHidden,
  allocatehidden: selectAllocateToggleHidden,
});

export default connect(mapStateToProps, {
  loadAdmin,
  getUsers,
  toggleModalHidden,
  toggleAllocateModalHidden,
})(Profile);
