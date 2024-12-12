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
    
    <HeroSection id ="hero" >
      
       
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
        <HeroButton href="#contact">Hire Me</HeroButton>
        <HeroButton href="#projects">View Portfolio</HeroButton>
      </ButtonContainer>

        </TextContent>
     
        </ProfileContainer>
   
    </HeroSection>
  );
};

export default Hero;
