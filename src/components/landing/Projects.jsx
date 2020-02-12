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
import { LinkButton } from "../reusable/Buttons";
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
    margin-bottom: 30px;
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
      <LinkButton content="View all projects" target="projects" />
    </ProjectsContainer>
  );
}
