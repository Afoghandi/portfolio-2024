import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import theme from './styles/Theme'
import Hero from './components/Hero/index';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
     
    <Navbar/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Contact/>
    <Footer/>
    </ThemeProvider>
  );
}

export default App;
