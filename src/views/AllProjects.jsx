import React, { useEffect } from "react";

import SectionTitle from "../components/reusable/SectionTitle";
import ProjectCard from "../components/landing/ProjectCard";
import { LinkButton } from "../components/reusable/Buttons";

import { projects, projectsTitle } from "../data/projects";
import { Container } from "../components/reusable/containerStyling";

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
    <Container>
      <SectionTitle title={projectsTitle} description="" />
      <div className="projects">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
      <LinkButton content="Return to home page" target="/" />
    </Container>
  );
}
