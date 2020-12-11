import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="form-container">
      <div className="form-wrap">
        <h1>Login</h1>
        <p>Please Enter Correct Details.</p>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
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

export default Login;
