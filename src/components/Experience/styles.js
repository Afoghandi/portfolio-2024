import styled from 'styled-components';



export const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.accent || '#333'};
  }
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TimelineItem = styled.div`
  display: flex;
  flex-direction: ${({ isLeft }) => (isLeft ? 'row' : 'row-reverse')};
  margin: 2rem 0;
  position: relative;
  opacity: 0; /* Initially hidden */
  transform: translateY(50px); /* Slightly off-screen */
  transition: all 0.6s ease-in-out;

  &.visible {
    opacity: 1; /* Fully visible */
    transform: translateY(0); /* Back to position */
  }
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground || '#fff'};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  text-align: left;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primaryText};
  }

  span {
    display: block;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;
