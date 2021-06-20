import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

// Global page styling
// Resets
export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    font-family: ${theme.font.primary};
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.palette.background};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${theme.font.baseSize};
    font-weight: 300;
    letter-spacing: 1px;
  }

  #root {
    overflow: hidden;
  }
`;
