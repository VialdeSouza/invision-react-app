import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Login } from './login';
import passwordValidator from '../utils/password-validator';
import emailValidator from '../utils/email-validator';

jest.mock('../utils/password-validator');
jest.mock('../utils/email-validator');

describe('Login form', () => {
  test('should render form to login', () => {
    render(<Login />);
    const nameInput = screen.getByRole('textbox', { name: /users name or Email/i });
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    expect(nameInput).toBeInTheDocument();
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
    passwordValidator.mockImplementation(() => ({}));
    render(<Login />);
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    fireEvent.change(passwordInput, { target: { value: 'any password' } });
    expect(passwordValidator).toHaveBeenCalledWith('any password');
  });

  test('should show error when passwordValidator returns error', () => {
    passwordValidator.mockImplementation(() => ({ isValid: false, ruleBroken: 'any message about password' }));
    render(<Login />);
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    fireEvent.change(passwordInput, { target: { value: 'invalid password' } });
    const errorMessage = screen.getByText(/any message about password/i);
    expect(errorMessage).toBeInTheDocument();
  });
  test('should call emailValidator with email onChange input email', () => {
    emailValidator.mockImplementation(() => ({}));
    render(<Login />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    fireEvent.change(emailInput, { target: { value: 'any email' } });
    expect(emailValidator).toHaveBeenCalledWith('any email');
  });
  
  test('should show error when emailValidator returns error', () => {
    emailValidator.mockImplementation(() => ({ isValid: false, ruleBroken: 'any message about email' }));
    render(<Login />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    fireEvent.change(emailInput, { target: { value: 'invalid email' } });
    const errorMessage = screen.getByText(/any message about email/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
