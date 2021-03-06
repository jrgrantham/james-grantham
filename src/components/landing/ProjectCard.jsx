import React from "react";
import styled from "styled-components";

import {
  borderRad,
  transition,
  projectCardBack,
  projectCardBackDark,
  fontColourDarkMode,
} from "../../views/styling";
import web from "../../images/web.png";
import github from "../../images/github.svg";
import youtube from "../../images/youTube.png";

export default function ProjectCard(props) {
  return (
    <>
      <FlipCard>
        <div className="flip-card-inner">
          <div className="flip-card-front toggle darkmode">
            <div className="imageDiv">
              <img src={props.project.image} alt={props.project.title} />
            </div>
            <div>
              <h4>{props.project.title}</h4>
              <p>{props.project.uses}</p>
            </div>
            <div className="buttons">
              <a href={props.project.link}>
                <div className="button toggle darkmode">
                  <img src={web} alt="web" />
                </div>
              </a>
              {props.project.presentation ? (
                <a href={props.project.presentation}>
                  <div className="button toggle darkmode">
                    <img src={youtube} alt="youtube" />
                  </div>
                </a>
              ) : null}
              <a href={props.project.repo}>
                <div className="button toggle darkmode">
                  <img src={github} alt="web" />
                </div>
              </a>
            </div>
          </div>
          <div className="flip-card-back toggle darkmode">
            <div className="details">
              <h3>{props.project.title}</h3>
              <h5>{props.project.uses}</h5>
              <p>{props.project.comments}</p>
            </div>
            <div className="buttons">
              <a href={props.project.link}>
                <div className="button toggle darkmode">
                  <img src={web} alt="web" />
                </div>
              </a>
              {props.project.presentation ? (
                <a href={props.project.presentation}>
                  <div className="button toggle darkmode">
                    <img src={youtube} alt="youtube" />
                  </div>
                </a>
              ) : null}
              <a href={props.project.repo}>
                <div className="button toggle darkmode">
                  <img src={github} alt="web" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </FlipCard>
    </>
  );
}

const FlipCard = styled.div`
  /* background-color: transparent; */
  width: 90%;
  max-width: 380px;
  height: 450px;
  perspective: 3000px;
  margin: 0 30px 60px 30px;

  @media (max-width: 500px) {
    /* width: 320px; */
    height: 400px;
    margin: 0 0px 25px 0px;
  }

  .details {
    max-height: 80%;
    padding: 20px;
    overflow: hidden;
    text-align: center;

    h3 {
      padding-top: 20px;
    }
    h5 {
      padding: 20px 0;

    }
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  a {
    margin: 0px 25px 25px 25px;
    transition: transform ${transition}s;

    @media (pointer: fine) {
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${borderRad}px;
    background: ${projectCardBack};
    width: 35px;
    height: 35px;
    padding: 5px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .button.darkmode {
    background: ${fontColourDarkMode};
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
    transition: transform ${transition * 2}s;
    transform-style: preserve-3d;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: ${borderRad}px;
    border: 1px solid ${projectCardBackDark};
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${projectCardBack};
    align-items: center;

    .imageDiv {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
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
