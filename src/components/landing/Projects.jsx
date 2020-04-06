import React from "react";
import styled from "styled-components";
import {
  projects,
  projectsTitle,
  projectsDescription,
  projectsNumber,
} from "../../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../reusable/SectionTitle";
import { Container } from "../reusable/containerStyling";
import { projectsMaxWidth } from '../../views/styling'

const ProjectsContainer = styled(Container)`
  .projects {
    max-width: ${projectsMaxWidth};
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
`;

export default function Projects() {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle title={projectsTitle} description={projectsDescription} />
      <div className="projects">
        {projects.slice(0, projectsNumber).map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </ProjectsContainer>
  );
}
