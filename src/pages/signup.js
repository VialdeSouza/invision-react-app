import React from 'react';
import Field from '../components/field';
import FieldEmail from '../components/fieldEmail';
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

      <FieldEmail
        onChange={() => {}}
        value=""
      />

      <FieldPassword
        label="Create password"
        onChange={() => {}}
        value=""
      />
      <input type="submit" value="Sign up" />
    </form>
  </div>
);

export default Signup;
