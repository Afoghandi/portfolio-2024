import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px; 
  margin: 0 auto;
 
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.accent || '#333'};
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
   max-width: 100%; 
 padding: 0rem 2rem;
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground || '#f7f8fc'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const ProjectDetails = styled.div`
  padding: 1.5rem;
  text-align: left;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primaryText};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-weight: bold;
    font-size: 0.9rem;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .btn-live {
    background: ${({ theme }) => theme.colors.gradientBackground};
    color: #fff;
    box-shadow: ${({ theme }) => theme.shadows.buttonShadow};
  }

  .btn-github {
    background: ${({ theme }) => theme.colors.cardBackground || '#f7f8fc'};
    color: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.accent};

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      color: #fff;
    }
  }
`;
