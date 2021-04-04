import React, { useState } from 'react';
import FieldEmail from '../components/fieldEmail';
import FieldPassword from '../components/fieldPassword';
import GoogleButton from '../components/socialButton';
import { signIn } from '../core/signin-core';
import {
  Button, Form, Title, WrapperContent, Helper, StyledLink, TextLine, Logo,
} from './styles';

export const Login = () => {
  const [loginForm, setLoginForm] = useState({ password: '', email: '' });

  const onChangePassword = (e) => {
    const password = e.target.value;
    setLoginForm((prev) => ({ ...prev, password }));
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setLoginForm((prev) => ({ ...prev, email }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    signIn(loginForm);
  };

  return (

    <WrapperContent>
      <Logo>Invision</Logo>
      <Title>Welcome to Invision</Title>
      <Form onSubmit={onSubmitForm}>
        <FieldEmail
          onChange={onChangeEmail}
          value={loginForm.email}
        />

        <FieldPassword
          value={loginForm.password}
          onChange={onChangePassword}
        />
        <Helper right>Forgot password?</Helper>
        <Button type="submit" value="Sign in" />
      </Form>
      <TextLine>
        Or
      </TextLine>
      <GoogleButton />
      <Helper right>
        New Invision?
        {' '}
        <StyledLink to="/signup">Create Account</StyledLink>
      </Helper>

    </WrapperContent>

  );
};
