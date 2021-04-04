import React, { useState } from 'react';
import FieldEmail from '../components/fieldEmail';
import FieldName from '../components/fieldName';
import FieldPassword from '../components/fieldPassword';
import GoogleButton from '../components/socialButton';
import { signUp } from '../core/signup-core';
import {
  Button, Form, Helper, Logo, StyledLink, TextLine, Title, WrapperContent,
} from './styles';

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

    <WrapperContent>
      <Logo>Invision</Logo>
      <Title>Getting Started</Title>
      <Form onSubmit={onSubmit}>

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
        <Button type="submit" value="Sign up" />
      </Form>
      <TextLine>
        Or
      </TextLine>
      <GoogleButton label="Sign up with Google" />

      <Helper>
        By signing up, you agree to Invision
        {' '}
        <StyledLink to="/">Terms of Conditions</StyledLink>
        {' '}
        and
        {' '}
        <StyledLink to="/">Privacy Policy</StyledLink>
      </Helper>
      <Helper>
        Already on Invision?
        <StyledLink to="/">Log In</StyledLink>
      </Helper>
    </WrapperContent>

  );
};

export default Signup;
