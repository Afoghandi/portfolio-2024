import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { experiences } from '../data/constants';

const Experience = () => {


  return (
    <ExperienceSection id="experience">
      <Container>
        <h2>Experience</h2>
        <Timeline>
          {experiences.map(exp => (
            <TimelineItem key={exp.year}>
              <Year>{exp.year}</Year>
              <Details>
                <h3>{exp.role} @ {exp.company}</h3>
                <p>{exp.description}</p>
              </Details>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
  padding: 2rem 0;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 1rem;
`;

const Year = styled.div`
  position: absolute;
  left: -2.5rem;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  text-align: center;
  width: 2rem;
  height: 2rem;
`;

const Details = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
`;

export default Experience;
