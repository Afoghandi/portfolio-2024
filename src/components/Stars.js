import styled, { keyframes } from 'styled-components';
import React from 'react'; 

const animStar = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-2000px);
  }
`;

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const StarsLayer = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: transparent;

  &.stars1 {
    box-shadow: 0px 0px #fff, 20px 50px #fff, 200px 400px #fff, 400px 800px #fff, 600px 1200px #fff, 800px 1600px #fff;
    animation: ${animStar} 50s linear infinite;
  }

  &.stars2 {
    box-shadow: 0px 0px #fff, 50px 100px #fff, 300px 600px #fff, 500px 900px #fff, 700px 1400px #fff, 900px 1800px #fff;
    animation: ${animStar} 100s linear infinite;
  }

  &.stars3 {
    box-shadow: 0px 0px #fff, 100px 200px #fff, 400px 800px #fff, 600px 1200px #fff, 800px 1600px #fff;
    animation: ${animStar} 150s linear infinite;
  }

  &:after {
    content: '';
    position: absolute;
    top: 2000px;
    width: inherit;
    height: inherit;
    background: inherit;
    box-shadow: inherit;
  }
`;

const Stars = () => (
  <StarsWrapper>
    <StarsLayer className="stars1" size={1} />
    <StarsLayer className="stars2" size={2} />
    <StarsLayer className="stars3" size={3} />
  </StarsWrapper>
);

export default Stars;
