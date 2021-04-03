import React from 'react';
import Field from '../components/field';
import FieldEmail from '../components/fieldEmail';
import FieldName from '../components/fieldName';
import FieldPassword from '../components/fieldPassword';

const Signup = () => (
  <div>
    <form>

      <FieldName
        onChange={() => {}}
        value=""
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
