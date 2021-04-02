import React, { useState } from 'react';
import Field from '../components/field';
import emailValidator from '../utils/email-validator';
import passwordValidator from '../utils/password-validator';

export const Login = () => {
  const [validations, setValidations] = useState({});
  const [loginForm, setLoginForm] = useState({ password: '', email: '' });

  const onChangePassword = (e) => {
    const password = e.target.value;
    const { errorMessage } = passwordValidator(password);
    setValidations({ ...validations, errorPassword: errorMessage });
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    const { errorMessage } = emailValidator(email);
    setValidations({ ...validations, errorEmail: errorMessage });
    setLoginForm({ ...loginForm, email });
  };

  return (
    <div>
      <form>
        <Field
          label="Users name or Email"
          id="username"
          onChange={onChangeEmail}
          value={loginForm.email}
          error={validations.errorEmail}
        />

        <Field
          value={loginForm.password}
          label="Password"
          id="password"
          onChange={onChangePassword}
          error={validations.errorPassword}
        />

        <input type="submit" value="Sign in" />
      </form>
      <button type="button">
        Sign in with Google
      </button>
    </div>
  );
};
