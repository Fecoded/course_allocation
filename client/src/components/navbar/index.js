import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Link to="#!">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
