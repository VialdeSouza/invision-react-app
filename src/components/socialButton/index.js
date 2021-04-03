import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as Icon } from '../../assets/google.svg';
import { Button } from './styles';

const GoogleButton = ({ label }) => (
  <Button type="button">
    <Icon />
    {label}
  </Button>
);
GoogleButton.defaultProps = {
  label: 'Sign in with Google',
};
GoogleButton.propTypes = {
  label: PropTypes.string,
};

export default GoogleButton;
