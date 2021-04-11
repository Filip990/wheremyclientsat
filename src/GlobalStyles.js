import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 20px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  button,
  a {
    font-family: inherit;
    font-size: inherit;
    border: none;
    background: transparent;
    cursor: pointer;
    text-decoration: none;
  }
`;

export default GlobalStyle;
