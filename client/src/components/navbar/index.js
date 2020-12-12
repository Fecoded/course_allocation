import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUser, logout } from "../../redux/user/user.action";
import { Link } from "react-router-dom";

const Navbar = ({ loadUser, logout }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <nav id="navbar">
      <h1 className="logo">
        <span className="text-primary">
          <i className="fas fa-book-open"></i> Course Allocation
        </span>
      </h1>
      <ul>
        <li>
          <Link to="#!">Profile</Link>
        </li>
        <li>
          <Link to="#!" onClick={() => logout()}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default connect(null, { loadUser, logout })(Navbar);
