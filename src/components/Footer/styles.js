import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.cardBackground || '#f0f0f0'};
  color: ${({ theme }) => theme.colors.textColor || '#333'};
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.9rem;
  box-shadow: ${({ theme }) => theme.shadows.buttonShadow};
  border-top: 1px solid ${({ theme }) => theme.colors.accent || '#ccc'};

  p {
    margin: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textColor};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 0.8rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.accent || '#4F7886'};
  font-size: 1.5rem;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textColor || '#333'};
    transform: scale(1.2);
  }

  i {
    font-size: 2rem;
  }
`;
