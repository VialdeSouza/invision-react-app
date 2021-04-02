import React, { useState } from 'react';
import Field from '../components/field';
import emailValidator from '../utils/email-validator';
import passwordValidator from '../utils/password-validator';

export const Login = () => {
  const [isValidPassword, setIsValidPassword] = useState({ ruleBroken: '' });
  const [isValidEmail, setIsValidEmail] = useState({ ruleBroken: '' });
  const [loginForm, setLoginForm] = useState({ password: '', email: '' });

  const onChangePassword = (e) => {
    const password = e.target.value;
    setIsValidPassword(passwordValidator(password));
    setLoginForm({ ...loginForm, password });
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setIsValidEmail(emailValidator(email));
    setLoginForm({ ...loginForm, email });
  };

  return (
    <div>
      <form>
        <Field
          value={loginForm.email}
          label="Users name or Email"
          id="username"
          onChange={onChangeEmail}
          error={isValidEmail.isValid === false}
          helperText={isValidEmail.ruleBroken}
        />

        <Field
          value={loginForm.password}
          label="Password"
          id="password"
          onChange={onChangePassword}
          error={isValidPassword.isValid === false}
          helperText={isValidPassword.ruleBroken}
        />

        <input type="submit" value="Sign in" />
      </form>
      <button type="button">
        Sign in with Google
      </button>
    </div>
  );
};
