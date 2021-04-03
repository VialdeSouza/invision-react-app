import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FieldEmail from '../components/fieldEmail';
import FieldPassword from '../components/fieldPassword';
import GoogleButton from '../components/socialButton';
import { signIn } from '../core/signin-core';
import { Button } from './styles';

export const Login = () => {
  const [loginForm, setLoginForm] = useState({ password: '', email: '' });

  const onChangePassword = (e) => {
    const password = e.target.value;
    setLoginForm((prev) => ({ ...prev, password }));
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setLoginForm((prev) => ({ ...prev, email }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    signIn(loginForm);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <FieldEmail
          onChange={onChangeEmail}
          value={loginForm.email}
        />

        <FieldPassword
          value={loginForm.password}
          onChange={onChangePassword}
        />

        <Button type="submit" value="Sign in" />
      </form>
      <GoogleButton />
      <Link to="/signup">Create Account</Link>
    </div>
  );
};
