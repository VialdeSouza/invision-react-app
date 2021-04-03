import validator from 'validator';
import fieldRequiredValidator from './field-required-validator';

const emailValidator = (email) => {
  const { isValid, errorMessage } = fieldRequiredValidator(email);
  if (!isValid) {
    return ({ isValid, errorMessage });
  }
  const isEmail = validator.isEmail(email);

  if (!isEmail) {
    return ({ isValid: false, errorMessage: 'O email está incorreto' });
  }
  return ({ isValid: false, errorMessage: 'any rule was broken' });
};
export default emailValidator;
