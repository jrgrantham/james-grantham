import React from "react";
import styled from "styled-components";

import { projects } from "../../data/projects";
import { mediaBreak } from "../../views/styling";

export default function Projects() {
  return (
    <StyledProjects>
      <h1>Projects</h1>
      {projects.map((project, index) => {
        return (
          <Card
            key={index}
            className={index % 2 === 0 ? "imgLeft" : "imgRight"}
          >
            <div className="image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="info">
              <div className="details">
                <h2>{project.title}</h2>
                <h4>{project.uses}</h4>
                <h4>{project.description}</h4>
              </div>
              <div className="buttons">
                <a href={project.link}>{"url"}</a>
                <a href={project.repo}>{"github"}</a>
              </div>
            </div>
          </Card>
        );
      })}
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (min-width: ${mediaBreak}) {
    .imgLeft {
      flex-direction: row;
    }
    .imgRight {
      flex-direction: row-reverse;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  // height: 500px;
  width: 100%;
  margin: 5px 0;
  border: 1px solid red;

  .image {
    width: 50%;

    img {
      width: 100%;
      height: auto;
    }
  }

  .info {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .buttons {
      display: flex;
      justify-content: space-evenly;
    }
  
    a {
      display: inline-block;
      min-width: 150px;
      margin-bottom: 30px;
      padding: 10px;
      border: 1px solid red;
    }
  }
`;
