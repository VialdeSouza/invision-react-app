import fieldRequiredValidator from './field-required-validator';

const emailValidator = (value) => {
  const { isValid, errorMessage } = fieldRequiredValidator(value);
  if (!isValid) {
    return ({ isValid, errorMessage });
  }
  return ({ isValid: false, errorMessage: 'any rule was broken' });
};
export default emailValidator;
