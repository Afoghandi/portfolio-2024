import React from 'react';
import skills from '../../data/data'
import { SkillsSection, SkillsGrid, SkillItem, SkillIcon, SkillName } from './styles';


const Skills = () => {
  return (
    <SkillsSection>
      <h2>My Skills</h2>
      <SkillsGrid>
        {skills.map((skill, index) => (
            
          <SkillItem key={index}>
            <SkillIcon>

               
              <i className={skill.iconClass}></i>
            </SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillItem>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
