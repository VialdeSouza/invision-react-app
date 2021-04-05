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

const getInputs = () => {
  const nameInput = screen.getByRole('textbox', { name: /full name/i });
  const emailInput = screen.getByRole('textbox', { name: /users name or Email/i });
  const passwordInput = screen.getByLabelText(/create password/i);
  return { nameInput, emailInput, passwordInput };
};
const getButtons = () => {
  const buttonSignUp = screen.getByRole('button', { name: 'Sign up' });
  return { buttonSignUp };
};
const getLinks = () => {
  const link = screen.getByRole('link', { name: /Log in/i });
  return { link };
};

describe('Signup Form', () => {
  test('should render form to signup', () => {
    renderWithProviders(<Signup />);
    const { nameInput, emailInput, passwordInput } = getInputs();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('should call  button Sign up', () => {
    renderWithProviders(<Signup />);
    const { buttonSignUp } = getButtons();
    expect(buttonSignUp).toBeInTheDocument();
  });

  test('should call signUp on submit form', () => {
    renderWithProviders(<Signup />);
    const { nameInput, emailInput, passwordInput } = getInputs();

    fireEvent.change(nameInput, { target: { value: 'any full name' } });
    fireEvent.change(emailInput, { target: { value: 'any email' } });
    fireEvent.change(passwordInput, { target: { value: 'any password' } });

    const { buttonSignUp } = getButtons();
    fireEvent.click(buttonSignUp);

    expect(signUp).toHaveBeenCalledWith({ name: 'any full name', email: 'any email', password: 'any password' });
  });

  test('should render link Log In', () => {
    renderWithProviders(<Signup />);
    const { link } = getLinks();
    expect(link).toBeInTheDocument();
  });

  test('should navigate to SignIn when click Log in', () => {
    const history = createMemoryHistory();
    const pushSpy = jest.spyOn(history, 'push');
    renderWithProviders(<Signup />, history);
    const { link } = getLinks();
    fireEvent.click(link);
    expect(pushSpy).toHaveBeenCalledWith('/');
    expect(history.location.pathname).toBe('/');
  });
});
