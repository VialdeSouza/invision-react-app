import emailValidator from './email-validator';

describe('emailValidator', () => {
  test('should return error if receive void value', () => {
    const { isValid, errorMessage } = emailValidator('   ');
    expect(isValid).not.toBeTruthy();
    expect(errorMessage).toEqual('Este campo não pode ser vazio');
  });
});
