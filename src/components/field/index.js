import PropTypes from 'prop-types';
import React from 'react';
import {
  Input, Label, Wrapper, Warning,
} from './styles';

const Field = ({
  value, label, onChange, id, error,
}) => {
  const isError = error.length > 0;
  return (
    <Wrapper>
      <Label htmlFor={id}>
        {label}
        <Input
          id={id}
          value={value}
          onChange={onChange}
          error={isError}
          required
        />
      </Label>
      {isError && <Warning>{error}</Warning>}
    </Wrapper>
  );
};
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
