import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthPage from '../components/templates/authPage';
import { Login } from '../pages/login';
import Signup from '../pages/signup';

const AuthRoutes = () => (
  <Router>
    <Route path="/" exact>
      <AuthPage>
        <Login />
      </AuthPage>
    </Route>
    <Route path="/signup">
      <AuthPage>
        <Signup />
      </AuthPage>
    </Route>
  </Router>
);

export default AuthRoutes;
