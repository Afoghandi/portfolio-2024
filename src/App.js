import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import theme from './styles/Theme'


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="background">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
    <Navbar/>
    </ThemeProvider>
  );
}

export default App;
