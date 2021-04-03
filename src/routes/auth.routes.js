import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from '../pages/login';
import Signup from '../pages/signup';

const AuthRoutes = () => (
  <Router>
    <Router path="/" exact component={Login} />
    <Router path="/signup" component={Signup} />
  </Router>
);

export default AuthRoutes;
