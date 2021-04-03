import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FieldName from '.';
import fieldRequiredValidator from '../../utils/field-required-validator';

jest.mock('../../utils/field-required-validator');

const renderWithProviders = async (component) => {
  fieldRequiredValidator.mockImplementation(() => ({ isValid: true, errorMessage: '' }));
  return render(component);
};
describe('Field Name', () => {
  test('should call requirerFieldValidator with value onChange input', () => {
    renderWithProviders(<FieldName onChange={() => {}} value="" />);
    const nameInput = screen.getByRole('textbox', { name: /full name/i });
    fireEvent.change(nameInput, { target: { value: 'any name' } });
    expect(fieldRequiredValidator).toHaveBeenCalledWith('any name');
  });

  test('should show error when requirerFieldValidator returns error', () => {
    render(<FieldName onChange={() => {}} value="" />);
    fieldRequiredValidator.mockImplementation(() => ({ isValid: false, errorMessage: 'any message error' }));
    const nameInput = screen.getByRole('textbox', { name: /full name/i });
    fireEvent.change(nameInput, { target: { value: 'invalid name' } });
    const errorMessage = screen.getByText(/any message error/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('should call onChange when change value name', () => {
    const onChange = jest.fn();
    renderWithProviders(<FieldName onChange={onChange} value="" />);
    const nameInput = screen.getByRole('textbox', { name: /full name/i });
    fireEvent.change(nameInput, { target: { value: 'any name' } });
    expect(onChange).toHaveBeenCalled();
  });

  test('should render prop value in FieldPassword', () => {
    renderWithProviders(<FieldName onChange={() => {}} value="any name" />);
    const nameInput = screen.getByRole('textbox', { name: /full name/i });
    expect(nameInput.value).toEqual('any name');
  });
});
