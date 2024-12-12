import styled from 'styled-components';




export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* Stack content vertically on smaller screens */
  height: 100vh;
  padding: 0 2rem;
   margin-bottom: 4rem;
  color: white;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack content */
    text-align: center; /* Center text */
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  max-width: 150px; /* Set max-width for smaller screens */
  height: auto; /* Maintain aspect ratio */
  border-radius: 50%;
  margin-right: 2rem;
  border: 5px solid white;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;


export const TextContent = styled.div`
  max-width: 600px;
  text-align: center; /* Center-align text for smaller screens */

  h1 {
    font-size: 2.5rem; /* Adjust font size for better readability */

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    span {
     color: ${({ theme }) => theme.colors.logo};
    }
  }
`;

export const TypingEffect = styled.div`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.accent};
  overflow: hidden;
  
  width: 100%;
  max-width: 300px;
  height: 1.8rem; /* Ensures consistent height for text changes */
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const IntroText = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
`;


export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack buttons vertically */
    gap: 1rem; /* Reduce gap for compact layout */
  }
`;

export const HeroButton = styled.a`
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.gradientBackground};
  box-shadow: ${({ theme }) => theme.shadows.buttonShadow};
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Slightly smaller font for compact buttons */
    padding: 0.6rem 1.2rem;
  }
`;