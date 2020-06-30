import { createGlobalStyle } from 'styled-components'

import theme from 'Components/styles/theme';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-weight: 400;
    line-height: 1.5;
    height: 100vh; 
    width: 100%;
    font-family: "PT Sans Narrow", Tahoma, Arial;
    font-size: 18px;
    color: ${theme.colors.text};
    background-color: ${theme.colors.bg};
    padding-top: 40px;
  }
`

export default GlobalStyles;