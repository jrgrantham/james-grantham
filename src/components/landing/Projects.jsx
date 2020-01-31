import React from "react";
import styled from "styled-components";

import { projects } from "../../data/projects";
import { projectMediaBreak, appWidth, borderRad } from "../../views/styling";

export default function Projects() {
  return (
    <ProjectsContainer>
        <h1>Projects</h1>
      <StyledProjects id="projects">
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
                  {/* <h2>{project.title}</h2> */}
                  {/* <h4>{project.uses}</h4> */}
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
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`


  h1 {
    font-weight: bold;
    padding: 20px 0;
  }
`

const StyledProjects = styled.div`
  max-width: ${appWidth}
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  h4 {
    padding: 7px 0;
  }

  // @media (min-width: ${projectMediaBreak}) {
  //   .imgLeft {
  //     flex-direction: row;
  //   }
  //   .imgRight {
  //     flex-direction: row-reverse;
  //   }
  // }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 3px
  margin: 0 30px 50px 30px;
  overflow: hidden;
  background-color: white;
    max-width: 400px;

  // @media (max-width: ${projectMediaBreak}) {
  // }

  .image {
    max-height: 360px;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: white;
    // border: 1px solid blue


    img {
      // flex-shrink: 0;
      width: 70%;
      height: auto;
      padding: 20px;
      margin: 40px 0;
      border-top: 1px solid lightgrey
      border-bottom: 1px solid lightgrey
      // border: 1px solid blue
    }
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // border: 1px solid blue

    .details {
      padding: 10px;
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
      border: 1px solid grey;
      border-radius: ${borderRad}
    }
  }
`;
