import fieldRequiredValidator from './field-required-validator';

const passwordValidator = (password) => {
  const { isValid, errorMessage } = fieldRequiredValidator(password);
  if (!isValid) {
    return ({ isValid, errorMessage });
  }

  return ({ isValid: false, errorMessage: 'any rule was broken' });
};
export default passwordValidator;
