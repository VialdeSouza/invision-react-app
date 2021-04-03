import PropTypes from 'prop-types';
import React, { useState } from 'react';
import fieldRequiredValidator from '../../utils/field-required-validator';
import Field from '../field';

const FieldName = ({ onChange, value }) => {
  const [error, setError] = useState('');
  const onChangeName = (e) => {
    const name = e.target.value;
    fieldRequiredValidator(name);
  };
  return (
    <Field
      label="Full Name"
      id="name"
      onChange={onChangeName}
      value={value}
      error={error}
    />
  );
};
FieldName.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldName;
