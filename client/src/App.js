import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { createStructuredSelector } from "reselect";
import { selectCurrentAdmin } from "./redux/admin/admin.selectors";

import Profile from "./components/profile";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

// Admin
import AdminProfile from "./components/admin/profile";
import AdminLogin from "./components/admin/login";

import PrivateRouteUser from "./components/routing/PrivateRouteUser";
import PrivateRouteAdmin from "./components/routing/PrivateRouteAdmin";

function App({ user: { user, isAuthenticated } }) {
  return (
    <Router>
      <Switch>
        <PrivateRouteUser exact path="/" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRouteAdmin
          exact
          path="/admin/profile"
          component={AdminProfile}
        />
        <Route
          exact
          path="/admin/login"
          render={() =>
            isAuthenticated && user ? (
              <Redirect to="/admin/profile" />
            ) : (
              <AdminLogin />
            )
          }
        />
      </Switch>
    </Router>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentAdmin,
});

export default connect(mapStateToProps)(App);
