// React imports
import React from 'react';

// Style imports
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GlobalStyle } from '../../styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="App">
        <header className="App-header">The app</header>
      </div>
    </ThemeProvider>
  );
}

export default App;
