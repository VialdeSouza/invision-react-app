import React from 'react';
import ReactDOM from 'react-dom';
import AuthRoutes from './routes/auth.routes';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthRoutes />
  </React.StrictMode>,
  document.getElementById('root'),
);
