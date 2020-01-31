import React from "react";
import styled from "styled-components";

import { projects } from "../../data/projects";
import { appWidth } from "../../views/styling";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <ProjectsContainer id="projects">
      <h1>Projects</h1>
      <StyledProjects>
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </StyledProjects>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  h1 {
    font-weight: bold;
    padding: 20px 0;
  }
`;

const StyledProjects = styled.div`
  max-width: ${appWidth}
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;
