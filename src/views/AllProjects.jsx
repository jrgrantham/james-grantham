import React, { useEffect } from "react";
import { projects, projectsTitle } from "../data/projects";
import ProjectCard from "../components/landing/ProjectCard";
import SectionTitle from "../components/reusable/SectionTitle";
import { ProjectsContainer } from "../components/reusable/projectsStyling";
import { Link } from "react-router-dom";
import LinkButton from "../components/reusable/LinkButton";

export default function Projects() {
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "auto"
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <ProjectsContainer>
      <SectionTitle title={projectsTitle} />
      <Link to="/">
        <LinkButton content="Return to home page" />
      </Link>
      <div className="projects">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
      <Link to="/">
        <LinkButton content="Return to home page" />
      </Link>
    </ProjectsContainer>
  );
}
