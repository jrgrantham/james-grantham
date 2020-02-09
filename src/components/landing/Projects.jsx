import React from "react";
import { Link } from "react-router-dom";
import {
  projects,
  projectsTitle,
  projectsDescription,
  projectsNumber
} from "../../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../reusable/SectionTitle";
import { ProjectsContainer } from "../reusable/projectsStyling";
import LinkButton from "../reusable/LinkButton";

export default function Projects() {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle title={projectsTitle} description={projectsDescription} />
      <div className="projects">
        {projects.slice(0, projectsNumber).map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
      <Link to="projects">
        <LinkButton content="View all projects" />
      </Link>
    </ProjectsContainer>
  );
}
