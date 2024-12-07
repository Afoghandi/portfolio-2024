import React from "react";
import {FooterWrapper, FooterContent, Logo, SocialLinks, FooterText} from'./styles';
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';



const Footer = () => {
    return (
      <FooterWrapper>
        <FooterContent>
          <Logo>Ralphael Oshun</Logo>
          <SocialLinks>
            <a href="https://github.com/ralphaeloshun" target="_blank" rel="noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/ralphaeloshun" target="_blank" rel="noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/ralphaeloshun" target="_blank" rel="noreferrer">
              <FaTwitter size={24} />
            </a>
          </SocialLinks>
          <FooterText>© {new Date().getFullYear()} Ralphael Oshun. All rights reserved.</FooterText>
        </FooterContent>
      </FooterWrapper>
    );
  };
  
  export default Footer;