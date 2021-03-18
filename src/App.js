/*
 *
 * Title: app file
 * Description: This file contains all the routes related to site.
 * Author: Shah Arafat
 * Date: 16-03-2021
 *
 */

// import dotenv from 'dotenv'

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import {
  Dashboard,
  ForgotPassword,
  Login,
  Signup,
  UpdateProfile,
} from "./pages";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Dashboard} />
          <PrivateRoute path="/updateProfile" component={UpdateProfile} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgotPassword" component={ForgotPassword} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
