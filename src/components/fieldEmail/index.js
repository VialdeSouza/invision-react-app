import PropTypes from 'prop-types';
import React, { useState } from 'react';
import emailValidator from '../../utils/email-validator';
import Field from '../field';

const FieldEmail = ({ onChange, value }) => {
  const [error, setError] = useState('');
  const onChangeEmail = (e) => {
    const email = e.target.value;
    const { errorMessage } = emailValidator(email);
    setError(errorMessage);
    onChange(e);
  };

  return (
    <Field
      label="Users name or Email"
      id="email"
      type="email"
      onChange={onChangeEmail}
      value={value}
      error={error}
    />
  );
};

FieldEmail.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldEmail;
