import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #111;
    font-family: 'Roboto', sans-serif;
    color: #FFF;
    overflow-x: hidden;
  }

  button input, select, textarea {
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  
  polyline {
    stroke: #FFF;
  }

  ::selection {
    background: rgba(51, 51, 51, 0.7);
  }

  ::-moz-selection {
    background: rgba(51, 51, 51, 0.7);
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: #E50914;
  }

  ::-webkit-scrollbar-track {
    background: #000;
  }
`;