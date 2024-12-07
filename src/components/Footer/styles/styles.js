import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 2rem 1rem;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
`;

export const SocialLinks = styled.div`
  margin: 1rem 0;
  a {
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;
