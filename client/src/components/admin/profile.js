import React, { Fragment } from "react";
import "./style.css";
import Navbar from "./navbar";

const Profile = () => {
  return (
    <Fragment>
      <Navbar />
      <section id="admin-container" className="bg-light py-1">
        <div className="admin-profile">
          <div className="admin-profiles my-1">
            <div>
              <h1>
                <span className="text-primary">
                  <i className="fas fa-user"></i> Welcome
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
                  <th>Rank Or Grade Level</th>
                  <th>Years Of Experience</th>
                  <th>Course Allocated</th>
                  <th>Allocation</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>MicroBiology, Biochemistry...</td>
                  <td>15</td>
                  <td>25 years</td>
                  <td>MicroBiology, Biochemistry</td>
                  <td>
                    <button type="submit" className="btn">
                      Allocate
                    </button>
                  </td>
                  <td>
                    <i className="fas fa-trash-alt fa-1x ml-1"></i>
                  </td>
                </tr>
                <tr>
                  <td>Sam Smith</td>
                  <td>Computer Technology</td>
                  <td>10</td>
                  <td>20 years</td>
                  <td>Computer Education</td>
                  <td>
                    <button type="submit" className="btn">
                      Allocate
                    </button>
                  </td>
                  <td>
                    <i className="fas fa-trash-alt fa-1x ml-1"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div id="course-modal" className="modalDialog">
        <div className="modal-content">
          <a href="#close" className="close">
            &times;
          </a>
          <h2 className="text-center py-1">Add Course</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Course</label>
              <input
                type="text"
                name="course"
                id="course"
                placeholder="Enter Course"
              />
            </div>
            <div className="form-group">
              <label htmlFor="unit">Unit</label>
              <input
                type="text"
                name="unit"
                id="unit"
                placeholder="Course Unit"
              />
            </div>
            <div className="form-group">
              <label htmlFor="level">Level</label>
              <select>
                <option value="100level">100 level</option>
                <option value="200level">200 level</option>
                <option value="300level">300 level</option>
                <option value="400level">400 level</option>
              </select>
            </div>
            <button type="submit" className="btn my-1">
              Create
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
