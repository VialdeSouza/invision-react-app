import React, { useState } from 'react';
import FieldEmail from '../components/fieldEmail';
import FieldName from '../components/fieldName';
import FieldPassword from '../components/fieldPassword';
import { signUp } from '../core/signup-core';

const Signup = () => {
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '' });
  const onChange = (e) => {
    const { id, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signUp(signupForm);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>

        <FieldName
          onChange={onChange}
          value={signupForm.name}
        />

        <FieldEmail
          onChange={onChange}
          value={signupForm.email}
        />

        <FieldPassword
          label="Create password"
          onChange={onChange}
          value={signupForm.password}
        />
        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
};

export default Signup;
