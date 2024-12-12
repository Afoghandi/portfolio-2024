import React, { useState, useEffect } from 'react';
import { NavbarContainer, Logo, Hamburger, Menu, MenuItem, Overlay } from './styles';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Toggle background after 50px scroll
       // Track active section
       const sections = document.querySelectorAll('section');
       let currentSection = 'hero'; // Default to Hero if no section is in view
       sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust for Navbar height
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
         <NavbarContainer scrolled={scrolled}>
          
         <Logo href="#hero" onClick={() => setIsMenuOpen(false)}>
         Ralphael Oshun
        </Logo>
        <Hamburger isMenuOpen={isMenuOpen} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </Hamburger>
        <Menu isMenuOpen={isMenuOpen}>
          <MenuItem href="#experience" onClick={() => setIsMenuOpen(false)}>
            Experience
          </MenuItem>
          <MenuItem href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </MenuItem>
          <MenuItem href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </MenuItem>
        </Menu>
        {isMenuOpen && <Overlay onClick={toggleMenu} />}
      </NavbarContainer>
    </>
  );
};

export default Navbar;
