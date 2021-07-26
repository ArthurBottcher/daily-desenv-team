import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { custom_theme } from './assets/theme'
ReactDOM.render(
  <ThemeProvider theme={custom_theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


