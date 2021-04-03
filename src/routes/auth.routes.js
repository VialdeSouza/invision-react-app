import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from '../pages/login';
import Signup from '../pages/signup';

const AuthRoutes = () => (
  <Router>
    <Route path="/" exact component={Login} />
    <Route path="/signup" component={Signup} />
  </Router>
);

export default AuthRoutes;
