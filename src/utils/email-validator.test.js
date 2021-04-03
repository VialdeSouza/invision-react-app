import validator from 'validator';
import emailValidator from './email-validator';

jest.mock('validator', () => ({
  isEmail() {
    return true;
  },
}));

describe('emailValidator', () => {
  test('should return error if receive void value', () => {
    const { isValid, errorMessage } = emailValidator('   ');
    expect(isValid).not.toBeTruthy();
    expect(errorMessage).toEqual('Este campo não pode ser vazio');
  });

  test('should return error if receive invalid email', () => {
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false);
    const { isValid, errorMessage } = emailValidator('invalid email');
    expect(isValid).not.toBeTruthy();
    expect(errorMessage).toEqual('O email está incorreto');
  });
});
