import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Login } from './login';
import { signIn } from '../core/signin-core';

jest.mock('../core/signin-core');

const renderWithProviders = async (component, history) => render(
  <Router history={history || createMemoryHistory()}>
    {component}
  </Router>,
);

describe('Login form', () => {
  test('should render form to login', () => {
    renderWithProviders(<Login />);
    const emailInput = screen.getByRole('textbox', { name: /users name or Email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('should render button Sign in', () => {
    renderWithProviders(<Login />);
    const button = screen.getByRole('button', { name: 'Sign in' });
    expect(button).toBeInTheDocument();
  });

  test('should render button Sign in with Google', () => {
    renderWithProviders(<Login />);
    const button = screen.getByRole('button', { name: /Sign in with Google/i });
    expect(button).toBeInTheDocument();
  });

  test('should call signIn on submit form', () => {
    renderWithProviders(<Login />);
    const button = screen.getByRole('button', { name: 'Sign in' });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(emailInput, { target: { value: 'any email' } });
    fireEvent.change(passwordInput, { target: { value: 'any password' } });
    fireEvent.click(button);

    expect(signIn).toHaveBeenCalledWith({ email: 'any email', password: 'any password' });
  });

  test('should render link Create Account', () => {
    renderWithProviders(<Login />);
    const link = screen.getByRole('link', { name: /create account/i });
    expect(link).toBeInTheDocument();
  });

  test('should navigate to Signup when click Create Account', () => {
    const history = createMemoryHistory();
    const pushSpy = jest.spyOn(history, 'push');
    renderWithProviders(<Login />, history);
    const link = screen.getByRole('link', { name: /create account/i });
    fireEvent.click(link);
    expect(pushSpy).toHaveBeenCalledWith('/signup');
    expect(history.location.pathname).toBe('/signup');
  });
});
