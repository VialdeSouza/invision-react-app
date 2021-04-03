import fieldRequiredValidator from './field-required-validator';

describe('fieldRequiredValidator', () => {
  test('should return error if receive invalid value', () => {
    const { isValid, errorMessage } = fieldRequiredValidator('   ');
    expect(isValid).not.toBeTruthy();
    expect(errorMessage).toEqual('Este campo não pode ser vazio');
  });
});
