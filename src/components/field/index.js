import PropTypes from 'prop-types';
import React from 'react';

const Field = ({
  value, label, onChange, id, error, helperText,
}) => (
  <div>
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        value={value}
        onChange={onChange}
      />
    </label>
    {error && helperText}
  </div>
);
Field.defaultProps = {
  error: false,
  helperText: '',
};
Field.propTypes = {
  error: PropTypes.bool,
  helperText: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;
