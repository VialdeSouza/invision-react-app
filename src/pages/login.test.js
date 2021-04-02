import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Login } from './login';
import passwordValidator from '../utils/password-validator';

jest.mock('../utils/password-validator');

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
  test('should show error when passwordValidator returns error', () => {
    passwordValidator.mockImplementation(() => ({ isValid: false, ruleBroken: 'any message about password' }));
    render(<Login />);

    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    fireEvent.change(passwordInput, { target: { value: 'invalid password' } });

    const errorMessage = screen.getByText(/any message about password/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
