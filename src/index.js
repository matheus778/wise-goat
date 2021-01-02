import ReactDOM from 'react-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);