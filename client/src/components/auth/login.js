import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { login } from "../../redux/user/user.action";
import { selectCurrentUser } from "../../redux/user/user.selector";

import Alert from "../alert/alert.component";

const Login = ({ login, user: { isAuthenticated } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    login({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div id="form-container">
      <div className="form-wrap">
        <h1>Login</h1>
        <p>Please Enter Correct Details.</p>
        <Alert />
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <p className="bottom-text">
            Don't have an Account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { login })(Login);
