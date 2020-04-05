import React from "react";
import styled from "styled-components";

import { borderRad, transition, buttonBlue, projectCardBack, projectCardBackDark, projectCardBorder, fontColourDarkMode } from "../../views/styling";
import { projectsLink, projectsGitHub } from "../../data/projects";

export default function ProjectCard(props) {
  return (
    <>
      <FlipCard>
        <div className="flip-card-inner">
          <div className="flip-card-front toggle darkmode">
            <div className="imageDiv">
              <img
                src={props.project.image}
                alt={props.project.title}
              />
            </div>
            <div className="buttons">
              {props.project.link === "" ? null : (
                <a href={props.project.link}>{projectsLink}</a>
              )}
              <a href={props.project.repo}>{projectsGitHub}</a>
            </div>
          </div>
          <div className="flip-card-back toggle darkmode">
            <div className="details">
              <h3>{props.project.title}</h3>
              <h5>{props.project.uses}</h5>
              <p>{props.project.comments}</p>
            </div>
            <div className="buttons">
              {props.project.link === "" ? null : (
                <a href={props.project.link}>{projectsLink}</a>
              )}
              <a href={props.project.repo}>{projectsGitHub}</a>
            </div>
          </div>
        </div>
      </FlipCard>
    </>
  );
}

const FlipCard = styled.div`
  background-color: transparent;
  width: 90%;
  max-width: 380px;
  height: 450px;
  perspective: 1000px;
  margin: 0 25px 50px 25px;

  @media (max-width: 500px) {
    width: 320px;
    height: 380px;
    margin-bottom: 40px;
  }

  h3, h4, h5 {
    margin-bottom: 7px
  }

  P {
    padding: 20px
  }

  .buttons {
    width: 100%;
    display: flex;
    min-height: 50px;
    justify-content: space-evenly;
    
    @media (max-width: 330px) {
      flex-direction: column;
      align-items: center;
    }
  }
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40%;
    padding: 10px;
    border-radius: ${borderRad}
    background: ${buttonBlue};
    color: ${fontColourDarkMode};
    font-weight: bold;
    transition: opacity ${transition};

    @media (max-width: 330px) {
      width: 90%;
      margin: 5px;
      padding: 5px;
    }

    @media (pointer: fine) {
      &:hover {
        opacity: 0.75;
      }
    }
  }

  img {
    width: 85%;
    max-width: 350px;
    max-height: 350px;
  }

  @media (pointer: fine) {
    &:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 1px solid ${projectCardBorder};
    border-radius: 15px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
    background-color: ${projectCardBack};
    align-items: center;
    
    .imageDiv {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // border: 1px solid red;
    }
  }
  
  .darkmode {
    background: ${projectCardBackDark};
  }
  
  .flip-card-front {
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }


`;
