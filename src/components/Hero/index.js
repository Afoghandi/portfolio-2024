import React from 'react';
import {Typewriter} from 'react-simple-typewriter'
import Stars from '../Stars';
import {
  HeroSection,
  ProfileContainer,
  ProfileImage,
  TextContent,
  TypingEffect,
  ButtonContainer,
  HeroButton,
} from './styles';
import MyProfile from '../../assets/MyProfile.png';


const Hero = () => {
  return (
    
    <HeroSection>
      
       
      <Stars/>
        <ProfileContainer>
        
        <ProfileImage src={MyProfile} alt="Your Profile" />
        <TextContent>
        <h1>Hello,<span> I'm Ralphael</span></h1>
        <TypingEffect>
        <Typewriter
              words={['Full Stack Developer', 'React Enthusiast', 'MERN Stack Expert', 'C# Expert', 'Concept Building', 'Thinker', 'Goals', 'Team Work']}
              loop={true}
              cursor={true}
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />

        </TypingEffect>
       
      <ButtonContainer>
        <HeroButton href="#projects">Hire Me</HeroButton>
        <HeroButton href="#contact">View Portfolio</HeroButton>
      </ButtonContainer>

        </TextContent>
     
        </ProfileContainer>
   
    </HeroSection>
  );
};

export default Hero;
