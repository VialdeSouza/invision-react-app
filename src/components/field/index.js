import PropTypes from 'prop-types';
import React from 'react';

const Field = ({
  value, label, onChange, id, error,
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
    {error.length && error}
  </div>
);
Field.defaultProps = {
  error: '',
};
Field.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;
