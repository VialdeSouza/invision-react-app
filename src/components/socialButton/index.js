import React from 'react';
import { ReactComponent as Icon } from '../../assets/google.svg';
import { Button } from './styles';

const GoogleButton = () => (
  <Button type="button">
    <Icon />
    Sign in with Google
  </Button>
);

export default GoogleButton;
