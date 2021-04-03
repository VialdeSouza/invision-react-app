import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FieldPassword from '.';
import passwordValidator from '../../utils/password-validator';

jest.mock('../../utils/password-validator');

const renderWithProviders = async (component) => {
  passwordValidator.mockImplementation(() => ({ isValid: true, errorMessage: '' }));
  return render(component);
};
describe('Field Password', () => {
  test('should call passwordValidator with password onChange input password', () => {
    renderWithProviders(<FieldPassword onChange={() => {}} value="" />);
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    fireEvent.change(passwordInput, { target: { value: 'any password' } });
    expect(passwordValidator).toHaveBeenCalledWith('any password');
  });

  test('should show error when passwordValidator returns error', () => {
    render(<FieldPassword onChange={() => {}} value="" />);
    passwordValidator.mockImplementation(() => ({ isValid: false, errorMessage: 'any message about password' }));
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    fireEvent.change(passwordInput, { target: { value: 'invalid password' } });
    const errorMessage = screen.getByText(/any message about password/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('should call onChange when change value password', () => {
    const onChange = jest.fn();
    renderWithProviders(<FieldPassword onChange={onChange} value="" />);
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    fireEvent.change(passwordInput, { target: { value: 'invalid password' } });
    expect(onChange).toHaveBeenCalled();
  });
  test('should render prop value with value input', () => {
    renderWithProviders(<FieldPassword onChange={() => {}} value="any value" />);
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    expect(passwordInput.value).toEqual('any value');
  });
});
