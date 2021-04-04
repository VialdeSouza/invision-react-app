import PropTypes from 'prop-types';
import React from 'react';
import Slider from '../slider';
import { Page } from './styles';

const AuthPage = ({ children }) => (
  <Page>
    <Slider />
    {children}
  </Page>
);

AuthPage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthPage;
