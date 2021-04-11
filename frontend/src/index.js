import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyles } from 'goober/global'

const GlobalStyles = createGlobalStyles`
  html,
  body {
    overflow-x: hidden;
  }

  body {
    min-height: 100vh;
    background: #000;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)