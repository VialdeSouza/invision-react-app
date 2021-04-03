import fieldRequiredValidator from './field-required-validator';

const passwordValidator = (password) => {
  const { isValid, errorMessage } = fieldRequiredValidator(password);
  if (!isValid) {
    return ({ isValid, errorMessage });
  }
  if (password.length < 6) {
    return ({ isValid: false, errorMessage: 'A senha não pode ter menos de 6 caracteres' });
  }
  return ({ isValid: true, errorMessage: '' });
};
export default passwordValidator;
