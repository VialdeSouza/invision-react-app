import React from 'react';
import Field from '../components/field';

const Signup = () => (
  <div>
    <form>

      <Field
        label="Full Name"
        id="name"
        onChange={() => {}}
        value=""
        error=""
      />

      <Field
        label="Users name or Email"
        id="username"
        onChange={() => {}}
        value=""
        error=""
      />

      <Field
        label="Create Password"
        id="password"
        onChange={() => {}}
        value=""
        error=""
      />
    </form>
  </div>
);

export default Signup;
