import passwordValidator from './password-validator';

describe('passwordValidator', () => {
  test('should return error if receive void password', () => {
    const { isValid, errorMessage } = passwordValidator('   ');
    expect(isValid).not.toBeTruthy();
    expect(errorMessage).toEqual('Este campo não pode ser vazio');
  });
});
