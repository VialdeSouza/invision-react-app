import emailValidator from '../utils/email-validator';
import passwordValidator from '../utils/password-validator';

export const signIn = (values) => {
  const { email, password } = values;
  const { isValid: emailIsValid } = emailValidator(email);
  const { isValid: passwordIsValid } = passwordValidator(password);
  const isValid = emailIsValid && passwordIsValid;
  if (!isValid) {
    alert('fails');
    return 'fails';
  }
  alert('done');
  return 'done';
};
