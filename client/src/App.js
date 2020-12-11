import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Profile from "./components/profile";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

// Admin
import AdminProfile from "./components/admin/profile";
import AdminLogin from "./components/admin/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/admin/profile" component={AdminProfile} />
        <Route exact path="/admin/login" component={AdminLogin} />
      </Switch>
    </Router>
  );
}

export default App;
