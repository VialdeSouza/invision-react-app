import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Signup from './signup';
import { signUp } from '../core/signup-core';

jest.mock('../core/signup-core');

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

  test('should call signUp on submit form', () => {
    render(<Signup />);
    const nameInput = screen.getByRole('textbox', { name: /full name/i });
    const emailInput = screen.getByRole('textbox', { name: /users name or Email/i });
    const passwordInput = screen.getByRole('textbox', { name: /create password/i });

    fireEvent.change(nameInput, { target: { value: 'any full name' } });
    fireEvent.change(emailInput, { target: { value: 'any email' } });
    fireEvent.change(passwordInput, { target: { value: 'any password' } });

    const button = screen.getByRole('button', { name: 'Sign up' });
    fireEvent.click(button);

    expect(signUp).toHaveBeenCalledWith({ name: 'any full name', email: 'any email', password: 'any password' });
  });
});
