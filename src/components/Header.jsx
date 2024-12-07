import React,{useEffect,useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {FaSun, FaMoon} from 'react-icons/fa'




const Header = ({toggleTheme, isDarkMode}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change navbar style after scrolling 50px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled} menuOpen={menuOpen} >
      <NavContent>
      <Logo>Ralphael Oshun</Logo>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
      <NavLinks menuOpen = {menuOpen}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </NavLinks>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </ThemeToggle>

      </NavContent>
 
    </Nav>
  );
};


const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;
const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 1rem 2rem;
  background: ${(props) =>
    props.scrolled
      ? 'linear-gradient(135deg, #FF6F61, #6A5ACD)'
      : 'transparent'};
  transition: background 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0px 6px 9px rgba(0, 0, 0, 0.1)' : 'none'};
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    animation: ${animStar} 50s linear infinite;
  }
`;


const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 10;
`;
const NavLinks = styled.div`
  display: flex;

  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  span {
    display: block;
    width: 25px;
    height: 3px;
    background: white;
    margin: 5px 0;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;



const ThemeToggle = styled.div`
  cursor: pointer;
  color: white;
  z-index: 10;

  &:hover {
    color: #ffc107;
  }
`;

export default Header;
