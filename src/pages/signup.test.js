import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Signup from './signup';
import { signUp } from '../core/signup-core';

jest.mock('../core/signup-core');

const renderWithProviders = async (component, history) => render(
  <Router history={history || createMemoryHistory()}>
    {component}
  </Router>,
);
describe('Signup Form', () => {
  test('should render form to signup', () => {
    renderWithProviders(<Signup />);
    const nameInput = screen.getByRole('textbox', { name: /full name/i });
    const emailInput = screen.getByRole('textbox', { name: /users name or Email/i });
    const passwordInput = screen.getByRole('textbox', { name: /create password/i });
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('should call  button Sign up', () => {
    renderWithProviders(<Signup />);
    const button = screen.getByRole('button', { name: 'Sign up' });
    expect(button).toBeInTheDocument();
  });

  test('should call signUp on submit form', () => {
    renderWithProviders(<Signup />);
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

  test('should render link Log In', () => {
    renderWithProviders(<Signup />);
    const link = screen.getByRole('link', { name: /Log in/i });
    expect(link).toBeInTheDocument();
  });

  test('should navigate to SignIn when click Log in', () => {
    const history = createMemoryHistory();
    const pushSpy = jest.spyOn(history, 'push');
    renderWithProviders(<Signup />, history);
    const link = screen.getByRole('link', { name: /Log in/i });
    fireEvent.click(link);
    expect(pushSpy).toHaveBeenCalledWith('/');
    expect(history.location.pathname).toBe('/');
  });
});
