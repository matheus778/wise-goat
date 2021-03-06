import ReactDOM from 'react-dom';
import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Routes from './Routes';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,400&display=swap');
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);