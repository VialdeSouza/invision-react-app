import React from 'react';

export const Login = () => (
  <div>
    <form>
      <label htmlFor="username">
        Users name or Email
        <input id="username" />
      </label>
      <label htmlFor="password">
        Password
        <input id="password" />
      </label>
      <input type="submit" value="Sign in" />
    </form>
  </div>
);
