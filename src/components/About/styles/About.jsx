import React from 'react';
import styled, {keyframes} from 'styled-components';
import Typewriter from 'react-typewriter-effect';



const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;
const About = () => {
  return (
    <HeroSection>
    <Background>
      <Stars className="stars" />
      <Stars className="stars2" />
      <Stars className="stars3" />
    </Background>
    <ProfileContainer>
        <ProfileImage
          src="https://via.placeholder.com/200"
          alt="Your Profile"
        />
        <TextContent>
          <h1>
            Hello, I'm <span>Ralphael</span>
          </h1>
          <TypingEffect>
            <Typewriter
               startDelay={100} 
               cursorColor="#FFC107"
               multiText={[
                'Full Stack Developer',
                'React Enthusiast',
                'MERN Stack Expert',
              ]}
              multiTextDelay={2000}
              typeSpeed={50}
              multiTextLoop
            />
          </TypingEffect>
          <Buttons>
            <button className="btn-primary">Hire Me</button>
            <button className="btn-secondary">View Portfolio</button>
          </Buttons>
        </TextContent>
      </ProfileContainer>
  </HeroSection>
  );
};

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 2rem;
  background: linear-gradient(135deg, #007BFF, #6A5ACD);
  color: white;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Stars = styled.div`
  position: absolute;
  background: transparent;

  &.stars {
    width: 1px;
    height: 1px;
     box-shadow: 
      150px 100px #FFF, 200px 300px #FFF, 400px 500px #FFF, 700px 800px #FFF,
      900px 1000px #FFF, 1100px 1200px #FFF, 1300px 1400px #FFF, 1500px 1600px #FFF,
      1700px 1800px #FFF, 1900px 2000px #FFF, 200px 800px #FFF, 800px 1500px #FFF;
    animation: ${animStar} 50s linear infinite;
  }

  &.stars2 {
    width: 2px;
    height: 2px;
     bbox-shadow: 
      250px 200px #FFF, 300px 400px #FFF, 500px 600px #FFF, 800px 900px #FFF,
      1000px 1100px #FFF, 1200px 1300px #FFF, 1400px 1500px #FFF, 1600px 1700px #FFF,
      1800px 1900px #FFF, 2000px 2100px #FFF, 500px 1300px #FFF, 1300px 1700px #FFF;
    animation: ${animStar} 100s linear infinite;
  }

  &.stars3 {
    width: 3px;
    height: 3px;
     box-shadow: 
      350px 300px #FFF, 400px 600px #FFF, 600px 700px #FFF, 900px 1000px #FFF,
      1100px 1200px #FFF, 1300px 1400px #FFF, 1500px 1600px #FFF, 1700px 1800px #FFF,
      1900px 2000px #FFF, 2100px 2200px #FFF, 700px 1700px #FFF, 1500px 1900px #FFF;
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

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 2rem;
  border: 5px solid white;
`;

const TextContent = styled.div`
  max-width: 600px;
  h1 {
    font-size: 3rem;
    span {
      color: #ffc107;
    }
  }
`;

const TypingEffect = styled.div`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-style: italic;
  color: #f0e68c;
`;

const Buttons = styled.div`
  margin-top: 2rem;
  .btn-primary {
    background: #ffc107;
    color: #333;
    padding: 0.8rem 1.5rem;
    border-radius: 30px;
    font-weight: bold;
    margin-right: 1rem;
    border: none;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .btn-secondary {
    background: white;
    color: #007bff;
    padding: 0.8rem 1.5rem;
    border-radius: 30px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default About;
