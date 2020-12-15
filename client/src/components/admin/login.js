import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/admin/admin.action";
import "./style.css";

import Alert from "../alert/alert.component";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div id="form-container">
      <div className="form-wrap">
        <h1>Admin Login</h1>
        {/* <p>Please Enter Correct Details.</p> */}
        <Alert />
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="email"
              value={email}
              id="username"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
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
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { login })(Login);
