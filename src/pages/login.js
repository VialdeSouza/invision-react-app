import React, { useState } from 'react';
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
        <label htmlFor="username">
          Users name or Email
          <input id="username" onChange={onChangeEmail} />
        </label>
        {isValidEmail.ruleBroken}
        <label htmlFor="password">
          Password
          <input
            id="password"
            onChange={onChangePassword}
          />
        </label>
        {isValidPassword.ruleBroken}

        <input type="submit" value="Sign in" />
      </form>
      <button type="button">
        Sign in with Google
      </button>
    </div>
  );
};
