import PropTypes from 'prop-types';
import React, { useState } from 'react';
import passwordValidator from '../../utils/password-validator';
import Field from '../field';

const FieldPassword = ({ label, onChange, value }) => {
  const [error, setError] = useState('');
  const onChangePassword = (e) => {
    const password = e.target.value;
    const { errorMessage } = passwordValidator(password);
    setError(errorMessage);
    onChange(e);
  };

  return (
    <Field
      label={label}
      id="password"
      type="password"
      onChange={onChangePassword}
      value={value}
      error={error}
    />
  );
};
FieldPassword.defaultProps = {
  label: 'Password',
};
FieldPassword.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldPassword;
