import emailValidator from '../utils/email-validator';
import fieldRequiredValidator from '../utils/field-required-validator';
import passwordValidator from '../utils/password-validator';

export const signUp = (values) => {
  const { name, email, password } = values;
  const { isValid: nameIsValid } = fieldRequiredValidator(name);
  const { isValid: emailIsValid } = emailValidator(email);
  const { isValid: passwordIsValid } = passwordValidator(password);
  const isValid = nameIsValid && emailIsValid && passwordIsValid;
  if (!isValid) {
    alert('fails');
    return 'fails';
  }
  alert('done');
  return 'done';
};
