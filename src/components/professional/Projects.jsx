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
  // justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  background-color: #FFBE0B;

  h1 {
    font-weight: bold;
    padding: 20px 0;
  }

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
  min-height: 300px;
  width: 95%;
  padding: 10px;
  border: 3px solid black;
  margin-bottom: 20px;
  background-color: #C6D4FF 

  .image {
    width: 100%;

    @media (min-width: ${mediaBreak}) {
      width: 50%
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: ${mediaBreak}) {
      width: 50%
    }

    .buttons {
      display: flex;
      justify-content: space-evenly;
    }
  
    a {
      display: inline-block;
      min-width: 150px;
      margin: 30px 0;
      padding: 10px;
      border: 2px solid black;
    }
  }
`;
