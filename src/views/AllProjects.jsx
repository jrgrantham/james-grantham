import React, { useEffect } from "react";

import useDarkMode from "../hooks/useDarkMode";

import SectionTitle from "../components/reusable/SectionTitle";
// import ProjectCard from "../components/landing/ProjectCard";
import { LinkButton } from "../components/reusable/Buttons";

import { projectsTitle } from "../data/projects";
// import { projects } from "../data/projects";
import { Container } from "../components/reusable/containerStyling";

export default function Projects() {
  useDarkMode();

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
    console.log("AllProjects: useeffect ran, HAS empty array");
  }, []);

  return (
    <Container>
      <SectionTitle title={projectsTitle} description="****** coming soon ******" />
      {/* <div className="projects">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div> */}
      <LinkButton content="Home page" target="/" />
      <s id="horizontalMenu"></s>
      <s id="aboutmeName"></s>
    </Container>
  );
}
