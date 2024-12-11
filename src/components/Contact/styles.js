import styled from 'styled-components';

export const ContactSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.background}) no-repeat center center / cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(70, 130, 180, 0.3); /* Hazy blue tint */
    z-index: 1;
  }
`;

export const ContactWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.cardBackground || '#fff'};
  box-shadow: ${({ theme }) => theme.shadows.buttonShadow};
  padding: 3rem;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  z-index: 2;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack form and summary vertically */
    padding: 2rem;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .response-message {
    margin-top: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textColor};
    background-color: #f0f0f0;
    padding: 0.5rem;
    border-radius: 5px;
    text-align: center;
  }
`;

export const InputField = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.accent || '#ccc'};
  border-radius: 5px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.accent || '#ccc'};
  border-radius: 5px;
  font-size: 1rem;
  min-height: 120px;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gradientBackground};
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.buttonShadow};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const SummaryContainer = styled.div`
  flex: 1;
  border-left: 2px solid ${({ theme }) => theme.colors.accent || '#ccc'};
  padding-left: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.accent || '#333'};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textColor || '#666'};
  }

  @media (max-width: 768px) {
    border-left: none;
    padding-left: 0;
    margin-top: 2rem; /* Adds spacing between form and summary on mobile */
    text-align: center;
  }
`;
