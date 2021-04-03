import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import emailValidator from '../../utils/email-validator';
import FieldEmail from '.';

jest.mock('../../utils/email-validator');

const renderWithProviders = async (component) => {
  emailValidator.mockImplementation(() => ({ isValid: true, errorMessage: '' }));
  return render(component);
};
describe('Field Email', () => {
  test('should call emailValidator with email onChange input email', () => {
    renderWithProviders(<FieldEmail onChange={() => {}} value="" />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    fireEvent.change(emailInput, { target: { value: 'any email' } });
    expect(emailValidator).toHaveBeenCalledWith('any email');
  });

  test('should show error when emailValidator returns error', () => {
    render(<FieldEmail onChange={() => {}} value="" />);
    emailValidator.mockImplementation(() => ({ isValid: false, errorMessage: 'any message about email' }));
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    fireEvent.change(emailInput, { target: { value: 'invalid email' } });
    const errorMessage = screen.getByText(/any message about email/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('should call onChange when change value email', () => {
    const onChange = jest.fn();
    renderWithProviders(<FieldEmail onChange={onChange} value="" />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    fireEvent.change(emailInput, { target: { value: 'invalid email' } });
    expect(onChange).toHaveBeenCalled();
  });

  test('should render prop value with value input', () => {
    renderWithProviders(<FieldEmail onChange={() => {}} value="any value" />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    expect(emailInput.value).toEqual('any value');
  });
});
