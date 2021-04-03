import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Field from '../components/field';
import FieldPassword from '../components/fieldPassword';
import { signIn } from '../core/signin-core';
import emailValidator from '../utils/email-validator';

export const Login = () => {
  const [validations, setValidations] = useState({});
  const [loginForm, setLoginForm] = useState({ password: '', email: '' });

  const onChangePassword = (e) => {
    const password = e.target.value;
    setLoginForm((prev) => ({ ...prev, password }));
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    const { errorMessage } = emailValidator(email);
    setValidations({ ...validations, errorEmail: errorMessage });
    setLoginForm((prev) => ({ ...prev, email }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    signIn(loginForm);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <Field
          label="Users name or Email"
          id="username"
          onChange={onChangeEmail}
          value={loginForm.email}
          error={validations.errorEmail}
        />

        <FieldPassword
          value={loginForm.password}
          onChange={onChangePassword}
        />

        <input type="submit" value="Sign in" />
      </form>
      <button type="button">
        Sign in with Google
      </button>
      <Link to="/signup">Create Account</Link>
    </div>
  );
};
