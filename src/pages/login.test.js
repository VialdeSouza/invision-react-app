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

const getInputs = () => {
  const emailInput = screen.getByRole('textbox', { name: /users name or Email/i });
  const passwordInput = screen.getByLabelText(/password/i);
  return { emailInput, passwordInput };
};
const getButtons = () => {
  const buttonSignIn = screen.getByRole('button', { name: 'Sign in' });
  const socialButton = screen.getByRole('button', { name: /Sign in with Google/i });
  return { buttonSignIn, socialButton };
};
const getLinks = () => {
  const link = screen.getByRole('link', { name: /create account/i });
  return { link };
};

describe('Login form', () => {
  test('should render form to login', () => {
    renderWithProviders(<Login />);
    const { emailInput, passwordInput } = getInputs();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('should render button Sign in', () => {
    renderWithProviders(<Login />);
    const { buttonSignIn } = getButtons();
    expect(buttonSignIn).toBeInTheDocument();
  });

  test('should render button Sign in with Google', () => {
    renderWithProviders(<Login />);
    const { socialButton } = getButtons();
    expect(socialButton).toBeInTheDocument();
  });

  test('should call signIn on submit form', () => {
    renderWithProviders(<Login />);
    const { buttonSignIn } = getButtons();
    const { emailInput, passwordInput } = getInputs();

    fireEvent.change(emailInput, { target: { value: 'any email' } });
    fireEvent.change(passwordInput, { target: { value: 'any password' } });
    fireEvent.click(buttonSignIn);

    expect(signIn).toHaveBeenCalledWith({ email: 'any email', password: 'any password' });
  });

  test('should render link Create Account', () => {
    renderWithProviders(<Login />);
    const { link } = getLinks();
    expect(link).toBeInTheDocument();
  });

  test('should navigate to Signup when click Create Account', () => {
    const history = createMemoryHistory();
    const pushSpy = jest.spyOn(history, 'push');
    renderWithProviders(<Login />, history);
    const { link } = getLinks();
    fireEvent.click(link);
    expect(pushSpy).toHaveBeenCalledWith('/signup');
    expect(history.location.pathname).toBe('/signup');
  });
});
