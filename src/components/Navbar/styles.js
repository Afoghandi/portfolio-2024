import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  transition: background 0.3s ease-in-out;

background: ${({ scrolled }) =>
    scrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent'};
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none'};
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  cursor: pointer;

  div {
    background: ${({ theme }) => theme.colors.textColor};
    height: 3px;
    width: 100%;
    transition: all 0.3s linear;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.primaryGradient};
    width: 250px;
    height: 100vh;
    padding: 2rem;
    box-shadow: ${({ theme }) => theme.shadows.buttonShadow};
    z-index: 999;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;
