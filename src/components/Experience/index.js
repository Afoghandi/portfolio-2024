import React, { useEffect, useRef } from 'react';
import {experienceData} from '../../data/data';
import {
  ExperienceSection,
  Timeline,
  TimelineItem,
  Content,
 
} from './styles';

const Experience = () => {
    const timelineRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          },
          { threshold: 0.5 }
        );
    
        timelineRef.current.forEach((el) => {
          if (el) observer.observe(el);
        });

        return () => {
            if (timelineRef.current) {
              timelineRef.current.forEach((el) => observer.unobserve(el));
            }
          };
        }, []);
  return (
    <ExperienceSection>
      <h2>Experience</h2>
      <Timeline>
        {experienceData.map((exp, index) => (
          <TimelineItem       key={exp.id}
          isLeft={index % 2 === 0}
          ref={(el) => (timelineRef.current[index] = el)}>
            <Content>
              <h3>{exp.title}</h3>
              <span>{exp.company} | {exp.duration}</span>
              <p>{exp.description}</p>
            </Content>
         
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
