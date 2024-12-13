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
              words={['Download My Resume','Code Architect','Full Stack Developer', 'Creative Problem Solver','Clean Code Advocate', 'Debugging Ninja','Innovative Thinker', 'Front End Wizard', 'Bank End Builder', 'Team Player Extraordinaire', 'Database Guru', 'API Connoisseur','Code Whisperer', 'Tech Evangelist','UI/UX Visionary','Software Alchemist','Always Learning']}
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
        <HeroButton href="/IT%20developer.docx" download="IT%20developer.docx">Download Resume</HeroButton>
      </ButtonContainer>

        </TextContent>
     
        </ProfileContainer>
   
    </HeroSection>
  );
};

export default Hero;
