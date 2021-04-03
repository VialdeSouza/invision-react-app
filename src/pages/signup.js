import React from 'react';
import Field from '../components/field';
import FieldPassword from '../components/fieldPassword';

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
      <FieldPassword
        label="Create password"
        value=""
        onChange={() => {}}
      />
      <input type="submit" value="Sign up" />
    </form>
  </div>
);

export default Signup;
