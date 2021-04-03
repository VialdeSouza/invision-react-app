import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthRoutes from './routes/auth.routes';

ReactDOM.render(
  <React.StrictMode>
    <AuthRoutes />
  </React.StrictMode>,
  document.getElementById('root'),
);
