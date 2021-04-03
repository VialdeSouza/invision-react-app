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
    const passwordInput = screen.getByRole('textbox', { name: /full name/i });
    fireEvent.change(passwordInput, { target: { value: 'any name' } });
    expect(fieldRequiredValidator).toHaveBeenCalledWith('any name');
  });
});
