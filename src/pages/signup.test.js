import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Signup from './signup';
import passwordValidator from '../utils/password-validator';

jest.mock('../utils/password-validator');
describe('Signup Form', () => {
  test('should render form to signup', () => {
    render(<Signup />);
    const nameInput = screen.getByRole('textbox', { name: /full name/i });
    const emailInput = screen.getByRole('textbox', { name: /users name or Email/i });
    const passwordInput = screen.getByRole('textbox', { name: /create password/i });
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('should call  button Sign up', () => {
    render(<Signup />);
    const button = screen.getByRole('button', { name: 'Sign up' });
    expect(button).toBeInTheDocument();
  });
});
