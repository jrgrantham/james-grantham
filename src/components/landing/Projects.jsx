import React from "react";
import styled from "styled-components";

import { projects } from "../../data/projects";
import { appWidth } from "../../views/styling";
import ProjectCard from "./ProjectCard";
// import ProjectCard from "./ProjectCardCopy";

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
  max-width: 1400px
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  // padding: 0 50px;
  width: 100%;
  margin-bottom: 30px;
`;
