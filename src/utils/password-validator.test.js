import passwordValidator from './password-validator';

describe('passwordValidator', () => {
  test('should return error if receive void password', () => {
    const { isValid, errorMessage } = passwordValidator('   ');
    expect(isValid).not.toBeTruthy();
    expect(errorMessage).toEqual('Este campo não pode ser vazio');
  });

  test('should return error if receive invalid password', () => {
    const { isValid, errorMessage } = passwordValidator('1234');
    expect(isValid).not.toBeTruthy();
    expect(errorMessage).toEqual('A senha não pode ter menos de 6 caracteres');
  });

  test('should return true if receive valid password', () => {
    const { isValid, errorMessage } = passwordValidator('123456');
    expect(isValid).toBeTruthy();
    expect(errorMessage).toEqual('');
  });
});
