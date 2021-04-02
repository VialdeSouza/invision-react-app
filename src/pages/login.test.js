import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
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
    render(<Login />);
    const emailInput = screen.getByRole('textbox', { name: /users name or Email/i });
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('should render button Sign in', () => {
    render(<Login />);
    const button = screen.getByRole('button', { name: 'Sign in' });
    expect(button).toBeInTheDocument();
  });

  test('should render button Sign in with Google', () => {
    render(<Login />);
    const button = screen.getByRole('button', { name: /Sign in with Google/i });
    expect(button).toBeInTheDocument();
  });

  test('should call passwordValidator with password onChange input password', () => {
    makeMockValidations();
    render(<Login />);
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    fireEvent.change(passwordInput, { target: { value: 'any password' } });
    expect(passwordValidator).toHaveBeenCalledWith('any password');
  });

  test('should show error when passwordValidator returns error', () => {
    passwordValidator.mockImplementation(() => ({ isValid: false, errorMessage: 'any message about password' }));
    render(<Login />);
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    fireEvent.change(passwordInput, { target: { value: 'invalid password' } });
    const errorMessage = screen.getByText(/any message about password/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('should call emailValidator with email onChange input email', () => {
    makeMockValidations();
    render(<Login />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    fireEvent.change(emailInput, { target: { value: 'any email' } });
    expect(emailValidator).toHaveBeenCalledWith('any email');
  });

  test('should show error when emailValidator returns error', () => {
    emailValidator.mockImplementation(() => ({ isValid: false, errorMessage: 'any message about email' }));
    render(<Login />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    fireEvent.change(emailInput, { target: { value: 'invalid email' } });
    const errorMessage = screen.getByText(/any message about email/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('should call signIn on submit form', () => {
    makeMockValidations();
    render(<Login />);
    const button = screen.getByRole('button', { name: 'Sign in' });

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByRole('textbox', { name: /password/i });

    fireEvent.change(emailInput, { target: { value: 'any email' } });
    fireEvent.change(passwordInput, { target: { value: 'any password' } });
    fireEvent.click(button);

    expect(signIn).toHaveBeenCalledWith({ email: 'any email', password: 'any password' });
  });

  test('should render link Create Account', () => {
    render(<Login />);
    const link = screen.getByRole('link', { name: /create account/i });
    expect(link).toBeInTheDocument();
  });
});
