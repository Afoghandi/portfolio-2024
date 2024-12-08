import styled from 'styled-components';

export const SkillsSection = styled.section`
  padding: 4rem 2rem;
   position: relative;
  z-index: 1;
  background: #f7f8fc;
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
 

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  justify-items: center;
  align-items: center;
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
`;

export const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const SkillName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;
