import React from 'react';
//import projects from '../../data/projects';
import {projects} from '../../data/data'
import {
  ProjectsSection,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectDetails,
  ButtonContainer,
} from './styles';

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>My Projects</h2>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectDetails>
              <h3>{project.title}</h3>
              <p>{project.synopsis}</p>
              <ButtonContainer>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-live">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                  GitHub
                </a>
              </ButtonContainer>
            </ProjectDetails>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
