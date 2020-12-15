import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../redux/admin/admin.action";

const Navbar = ({ logout }) => {
  return (
    <nav id="navbar">
      <h1 className="logo">
        <span className="text-primary">
          <i className="fas fa-book-open"></i> Course Allocation
        </span>
      </h1>
      <ul>
        <li>
          <Link to="#!" onClick={() => logout()}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default connect(null, { logout })(Navbar);
