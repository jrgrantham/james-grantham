import React from "react";
import styled from "styled-components";

import { projects } from "../../data/projects";
import { projectMediaBreak, appWidth } from "../../views/styling";

export default function Projects() {
  return (
    <StyledProjects id="projects">
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
                <h5>{project.description}</h5>
              </div>
              <div className="buttons">
                {project.link === "" ? null : (
                  <a href={project.link}>{"url"}</a>
                )}
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
  max-width: ${appWidth}
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;

  h1 {
    font-weight: bold;
    padding: 20px 0;
  }

  h4 {
    padding: 7px 0;
  }

  @media (min-width: ${projectMediaBreak}) {
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
  min-height: 300px;
  width: 95%;
  border: 6px solid black;
  margin-bottom: 30px;
  background-color: #a3e7fc;

  @media (max-width: ${projectMediaBreak}) {
    max-width: 500px;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: black;

    @media (min-width: ${projectMediaBreak}) {
      width: 50%;
    }

    img {
      // flex-shrink: 0;
      width: 100%;
      height: auto;
    }
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4,
    h5 {
      text-align: left;
      // padding: 0 30px;
    }

    @media (min-width: ${projectMediaBreak}) {
      width: 50%;
    }

    .details {
      padding: 30px;
      // border: 1px solid red
    }

    .buttons {
      display: flex;
      justify-content: space-evenly;
      padding: 30px 0;
      // border: 1px solid red
    }

    a {
      display: inline-block;
      min-width: 130px;
      padding: 10px;
      border: 2px solid black;
    }
  }
`;
