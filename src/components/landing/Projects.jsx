import React from "react";
import styled from "styled-components";

import { projects } from "../../data/projects";
import { appWidth, mediaBreak } from "../../views/styling";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../reusable/SectionTitle";
// import ProjectCard from "./ProjectCardCopy";

export default function Projects() {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle title={'Projects'} description={'Check out some of my work'} />
      <StyledProjects>
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </StyledProjects>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;

const StyledProjects = styled.div`
  max-width: 1600px
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  // padding: 0 50px;
  width: 100%;
  margin-bottom: 30px;
  // border: 1px solid red
`;
