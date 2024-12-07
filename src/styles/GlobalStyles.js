import { createGlobalStyle, keyframes } from 'styled-components';

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
     background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    color: #ffffff;
    overflow: hidden;
    position: relative;
    min-height: 100vh;
  }
      .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1; /* Behind all content */
  }

 /* Stars */

   .stars, .stars2, .stars3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .stars {
       background: transparent;
    box-shadow: 1487px 822px #FFF, 702px 619px #FFF, 579px 76px #FFF, 881px 14px #FFF;
    width: 1px;
    height: 1px;
    animation: ${animStar} 50s linear infinite;

    &:after {
      content: "";
      position: absolute;
      top: 2000px;
      width: inherit;
      height: inherit;
      background: inherit;
      box-shadow: inherit;
    }
  }

    .stars2 {
    background: transparent;
    box-shadow: 592px 134px #FFF, 346px 741px #FFF, 1000px 1781px #FFF, 996px 728px #FFF;
    width: 2px;
    height: 2px;
    animation: ${animStar} 100s linear infinite;

    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: inherit;
      height: inherit;
      box-shadow: inherit;
    }
  }
      .stars3 {
    background: transparent;
    box-shadow: 222px 946px #FFF, 408px 926px #FFF, 1608px 1741px #FFF, 1977px 1436px #FFF;
    width: 3px;
    height: 3px;
    animation: ${animStar} 150s linear infinite;

    &:after {
      content: "";
      position: absolute;
      top: 2000px;
      width: inherit;
      height: inherit;
      box-shadow: inherit;
    }
  }
`;
