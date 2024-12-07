import React, { useState, useEffect } from 'react';
import { NavbarContainer, Hamburger, Menu, MenuItem, Overlay } from './styles';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Toggle background after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
         <NavbarContainer scrolled={scrolled}>
        <h1>My Portfolio</h1>
        <Hamburger isMenuOpen={isMenuOpen} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </Hamburger>
        <Menu isMenuOpen={isMenuOpen}>
          <MenuItem href="#about" onClick={() => setIsMenuOpen(false)}>
            About
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
