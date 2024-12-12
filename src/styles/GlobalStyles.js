import { createGlobalStyle} from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Arial', sans-serif;
     background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    color: #ffffff;
    overflow: hidden;
    position: relative;
    min-height: 100vh;
    overflow: auto;
  }

`;
