import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from '../pages/login';

const Signup = () => (<></>);
const AuthRoutes = () => (
  <Router>
    <Router path="/" exact component={Login} />
    <Router path="/signup" component={Signup} />
  </Router>
);

export default AuthRoutes;
