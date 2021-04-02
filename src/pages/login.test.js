import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Login } from './login';
import passwordValidator from '../utils/password-validator';
import emailValidator from '../utils/email-validator';
import { signIn } from '../core/signin-core';

jest.mock('../utils/password-validator');
jest.mock('../utils/email-validator');
jest.mock('../core/signin-core');

const makeMockValidations = () => {
  const mockPasswordValidator = passwordValidator.mockImplementation(() => ({ isValid: true, errorMessage: '' }));
  const mockEmailValidator = emailValidator.mockImplementation(() => ({ isValid: true, errorMessage: '' }));
  return (mockEmailValidator, mockPasswordValidator);
};

describe('Login form', () => {
  test('should render form to login', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>,
    );
    const emailInput = screen.getByRole('textbox', { name: /users name or Email/i });
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('should render button Sign in', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>,
    );
    const button = screen.getByRole('button', { name: 'Sign in' });
    expect(button).toBeInTheDocument();
  });

  test('should render button Sign in with Google', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>,
    );
    const button = screen.getByRole('button', { name: /Sign in with Google/i });
    expect(button).toBeInTheDocument();
  });

  test('should call passwordValidator with password onChange input password', () => {
    makeMockValidations();
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>,
    );
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    fireEvent.change(passwordInput, { target: { value: 'any password' } });
    expect(passwordValidator).toHaveBeenCalledWith('any password');
  });

  test('should show error when passwordValidator returns error', () => {
    passwordValidator.mockImplementation(() => ({ isValid: false, errorMessage: 'any message about password' }));
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>,
    );
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    fireEvent.change(passwordInput, { target: { value: 'invalid password' } });
    const errorMessage = screen.getByText(/any message about password/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('should call emailValidator with email onChange input email', () => {
    makeMockValidations();
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>,
    );
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    fireEvent.change(emailInput, { target: { value: 'any email' } });
    expect(emailValidator).toHaveBeenCalledWith('any email');
  });

  test('should show error when emailValidator returns error', () => {
    emailValidator.mockImplementation(() => ({ isValid: false, errorMessage: 'any message about email' }));
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>,
    );
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    fireEvent.change(emailInput, { target: { value: 'invalid email' } });
    const errorMessage = screen.getByText(/any message about email/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('should call signIn on submit form', () => {
    makeMockValidations();
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>,
    );
    const button = screen.getByRole('button', { name: 'Sign in' });

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByRole('textbox', { name: /password/i });

    fireEvent.change(emailInput, { target: { value: 'any email' } });
    fireEvent.change(passwordInput, { target: { value: 'any password' } });
    fireEvent.click(button);

    expect(signIn).toHaveBeenCalledWith({ email: 'any email', password: 'any password' });
  });

  test('should render link Create Account', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>,
    );
    const link = screen.getByRole('link', { name: /create account/i });
    expect(link).toBeInTheDocument();
  });

  test('should navigate to Signup when click Create Account', () => {
    const history = createMemoryHistory();
    const pushSpy = jest.spyOn(history, 'push');
    render(
      <Router history={history}>
        <Login />
      </Router>,
    );
    const link = screen.getByRole('link', { name: /create account/i });
    fireEvent.click(link);
    expect(pushSpy).toHaveBeenCalledWith('/signup');
    expect(history.location.pathname).toBe('/signup');
  });
});
