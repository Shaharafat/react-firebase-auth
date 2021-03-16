/*
 *
 * Title: app file
 * Description: This file contains all the routes related to site.
 * Author: Shah Arafat
 * Date: 16-03-2021
 *
 */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import {
  Dashboard,
  ForgotPassword,
  Login,
  Signup,
  UpdateProfile,
} from "./pages";

// styles
import "./styles/style.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/updateProfile" component={UpdateProfile} />
          <PrivateRoute path="/forgotPassword" component={ForgotPassword} />
          <PrivateRoute path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
