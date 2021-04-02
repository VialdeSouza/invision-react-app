import React, { useState } from 'react';
import passwordValidator from '../utils/password-validator';

export const Login = () => {
  const [isValidPassword, setIsValidPassword] = useState({ ruleBroken: '' });
  const [loginForm, setLoginForm] = useState({ password: '' });
  return (
    <div>
      <form>
        <label htmlFor="username">
          Users name or Email
          <input id="username" />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            onChange={(e) => {
              const password = e.target.value;
              setIsValidPassword(passwordValidator(password));
              setLoginForm({ ...loginForm, password });
            }}
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
