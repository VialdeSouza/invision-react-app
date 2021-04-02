import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from './login';

describe('Login form', () => {
  test('should render form to login', () => {
    render(<Login />);
    const nameInput = screen.getByRole('textbox', { name: /users name or Email/i });
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    expect(nameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
