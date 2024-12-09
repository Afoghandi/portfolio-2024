import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import theme from './styles/Theme'
import Hero from './components/Hero/index';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
     
    <Navbar/>
    <Hero/>
    <Skills/>
    <Projects/>
    </ThemeProvider>
  );
}

export default App;
