import fieldRequiredValidator from './field-required-validator';

describe('fieldRequiredValidator', () => {
  test('should return error if receive invalid value', () => {
    const { isValid, errorMessage } = fieldRequiredValidator('   ');
    expect(isValid).not.toBeTruthy();
    expect(errorMessage).toEqual('Este campo não pode ser vazio');
  });

  test('should return true if receive valid value', () => {
    const { isValid, errorMessage } = fieldRequiredValidator('valid value');
    expect(isValid).toBeTruthy();
    expect(errorMessage).toEqual('');
  });
});
